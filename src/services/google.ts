import {setOptions,importLibrary} from '@googlemaps/js-api-loader';
import type {Cafe,Point,Review} from '../types';
import {miles,campusApprox} from '../utils/geo';
let initialized=false;
export const configured=Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim());
export async function loadGoogle(){if(!configured)throw new Error('Live Google Maps is not configured.');if(!initialized){setOptions({key:import.meta.env.VITE_GOOGLE_MAPS_API_KEY,v:'weekly'});initialized=true;}const [maps,places,marker]=await Promise.all([importLibrary('maps'),importLibrary('places'),importLibrary('marker')]);return {maps,places,marker};}
const baseFields=['id','displayName','location','formattedAddress','rating','userRatingCount','priceLevel','businessStatus','regularOpeningHours','photos','googleMapsURI','types','currentOpeningHours'];
const detailFields=['id','displayName','location','formattedAddress','rating','userRatingCount','priceLevel','businessStatus','regularOpeningHours','currentOpeningHours','photos','googleMapsURI','types','websiteURI','nationalPhoneNumber','reviews','outdoorSeating','servesVegetarianFood','dineIn','takeout','delivery'];
async function toCafe(p:google.maps.places.Place):Promise<Cafe|null>{
  if(!p.location||!p.id)return null;
  const loc={lat:p.location.lat(),lng:p.location.lng()};
  const photo=p.photos?.[0];
  const photos=p.photos?.slice(0,5).map(x=>x.getURI({maxWidth:900,maxHeight:650}));
  const hours=p.currentOpeningHours||p.regularOpeningHours;
  // The Places API exposes open status via the async Place.isOpen() method;
  // OpeningHours has no openNow property in @types/google.maps 3.58.
  const open=await p.isOpen().catch(()=>undefined);
  return {id:p.id,name:p.displayName||'Unnamed café',location:loc,address:p.formattedAddress||undefined,rating:p.rating??undefined,reviewCount:p.userRatingCount??undefined,price:p.priceLevel||undefined,open,photo:photo?.getURI({maxWidth:600,maxHeight:420}),photos,website:p.websiteURI||undefined,phone:p.nationalPhoneNumber||undefined,mapsUrl:p.googleMapsURI||undefined,types:p.types||undefined,hours:hours?.weekdayDescriptions||undefined,businessStatus:p.businessStatus||undefined,amenities:{outdoor:p.hasOutdoorSeating??undefined,vegetarian:p.servesVegetarianFood??undefined,dineIn:p.hasDineIn??undefined,takeout:p.hasTakeout??undefined,delivery:p.hasDelivery??undefined},source:'google',onCampus:campusApprox(loc)};
}
const cache=new Map<string,{at:number;items:Cafe[]}>();
const searches=['coffee shop UC San Diego campus','cafe UCSD Geisel Library Price Center','coffee shop La Jolla Village','coffee shop University City San Diego UTC','coffee shop Torrey Pines UCSD','bakery cafe near UCSD','boba tea UCSD'];
export async function searchCafes(origin:Point,radiusMi:number):Promise<Cafe[]>{const key=`${origin.lat.toFixed(3)}:${origin.lng.toFixed(3)}:${radiusMi.toFixed(2)}`;const hit=cache.get(key);if(hit&&Date.now()-hit.at<10*60_000)return hit.items;const {places}=await loadGoogle();const Place=places.Place;const seen=new Map<string,Cafe>();const add=async(ps:google.maps.places.Place[])=>{const cs=await Promise.all(ps.map(toCafe));for(const c of cs){if(c&&c.businessStatus!=='CLOSED_PERMANENTLY'&&miles(origin,c.location)<=radiusMi)seen.set(c.id,c);}};
// Nearby Search has a result cap, so supplement it with geographically distinct text searches.
const tasks:Promise<unknown>[]=[];for(const type of ['cafe','coffee_shop']){tasks.push(Place.searchNearby({fields:baseFields,locationRestriction:{center:origin,radius:Math.min(radiusMi*1609.344,8000)},includedPrimaryTypes:[type],maxResultCount:20,rankPreference:google.maps.places.SearchNearbyRankPreference.DISTANCE}).then(r=>add(r.places)).catch(()=>{}));}
for(const q of searches){tasks.push(Place.searchByText({textQuery:q,fields:baseFields,locationBias:{center:origin,radius:Math.min(radiusMi*1609.344+1000,10000)},maxResultCount:20}).then(r=>add(r.places)).catch(()=>{}));}
await Promise.all(tasks);const items=[...seen.values()];if(!items.length)throw new Error('No live cafés returned. Check your API permissions, quota, or connection.');cache.set(key,{at:Date.now(),items});return items;}
export async function getCafeDetails(id:string):Promise<Cafe>{const {places}=await loadGoogle();const p=new places.Place({id});await p.fetchFields({fields:detailFields});const c=await toCafe(p);if(!c)throw new Error('This café could not be loaded.');const reviews=((p.reviews||[]) as google.maps.places.Review[]).slice(0,5);c.reviews=reviews.map((r):Review=>({author:r.authorAttribution?.displayName||'Google reviewer',rating:r.rating||0,text:r.text||'',time:r.relativePublishTimeDescription||undefined,avatar:r.authorAttribution?.photoURI||undefined,url:r.authorAttribution?.uri||undefined}));return c;}
