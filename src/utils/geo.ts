import type {Point} from '../types';
export function miles(a:Point,b:Point){const r=3958.7613,rad=Math.PI/180,dlat=(b.lat-a.lat)*rad,dlng=(b.lng-a.lng)*rad;const x=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlng/2)**2;return 2*r*Math.asin(Math.min(1,Math.sqrt(x)));}
export function walkMinutes(mi:number){return Math.max(1,Math.round(mi/3*60));}
// Noun for a routed duration on a cafe card, e.g. "12 mins walk" once a real
// route exists; the "~N min walk*" estimate is shown until then.
export function modeNoun(mode:string){return ({WALKING:'walk',BICYCLING:'bike',TRANSIT:'transit',DRIVING:'drive'} as Record<string,string>)[mode]||'walk';}
// Main UCSD campus outline, simplified from the OpenStreetMap UCSD boundary
// (way 25822522, via Nominatim): Torrey Pines Rd north, N Torrey Pines Rd
// west, Gilman Dr east (with the VA hospital notch), La Jolla Village Dr
// area south. Scripps and East Campus (across Gilman) are UCSD but not the
// walkable main campus, so they are deliberately outside this polygon.
const CAMPUS_POLYGON:[number,number][]=[[32.8941,-117.2415],[32.8940,-117.2431],[32.8915,-117.2498],[32.8885,-117.2467],[32.8879,-117.2439],[32.8765,-117.2436],[32.8716,-117.2434],[32.8689,-117.2439],[32.8705,-117.2410],[32.8721,-117.2362],[32.8719,-117.2320],[32.8733,-117.2338],[32.8763,-117.2333],[32.8763,-117.2314],[32.8817,-117.2288],[32.8879,-117.2315],[32.8900,-117.2355],[32.8919,-117.2407]];
export function campusApprox(p:Point){let inside=false;for(let i=0,j=CAMPUS_POLYGON.length-1;i<CAMPUS_POLYGON.length;j=i++){const [aLat,aLng]=CAMPUS_POLYGON[i],[bLat,bLng]=CAMPUS_POLYGON[j];if((aLat>p.lat)!==(bLat>p.lat)&&p.lng<(bLng-aLng)*(p.lat-aLat)/(bLat-aLat)+aLng)inside=!inside;}return inside;}
export function mapsDirections(c:Point,origin:Point,mode:string){const o=`${origin.lat},${origin.lng}`,d=`${c.lat},${c.lng}`;return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(o)}&destination=${encodeURIComponent(d)}&travelmode=${mode.toLowerCase()}`;}
export function priceLabel(v?:string){if(!v)return 'Price unavailable';return ({PRICE_LEVEL_FREE:'Free',PRICE_LEVEL_INEXPENSIVE:'$',PRICE_LEVEL_MODERATE:'$$',PRICE_LEVEL_EXPENSIVE:'$$$',PRICE_LEVEL_VERY_EXPENSIVE:'$$$$'} as Record<string,string>)[v]||v;}
