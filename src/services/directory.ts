import type {Cafe} from '../types';
// A clearly labelled, offline discovery directory. Locations are approximate and are NOT live Google data.
// Live Google Places results replace matching directory entries when configured.
// List verified 2026-11-19 against web listings and geocoding: UCSD campus,
// La Jolla Village, Bird Rock, La Jolla Shores / Scripps, and UTC / University City.
// Every entry carries a real street address so the app's Google Maps link
// (name + address) lands on the right place, where its Google reviews live.
// No ratings, review counts, hours or photos are invented for these entries.
const entries:Cafe[]=[
// UCSD campus
{id:'dir-moms',name:"M.O.M.'s Café",location:{lat:32.8786,lng:-117.2422},address:'Muir College, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-art',name:'Art of Espresso',location:{lat:32.8780,lng:-117.2352},address:'Mandeville Center, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-audrey',name:"Audrey's Café",location:{lat:32.8812,lng:-117.2375},address:'Geisel Library, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-starbucks-pc',name:'Starbucks — Price Center',location:{lat:32.8796,lng:-117.2366},address:'Price Center, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-bluebowl',name:'Blue Bowl',location:{lat:32.8798,lng:-117.2357},address:'Price Center, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-copa-vida',name:'Copa Vida',location:{lat:32.88128,lng:-117.23447},address:'Sixth College, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-birdrock-ucsd',name:'Bird Rock Coffee Roasters — UCSD',location:{lat:32.8796,lng:-117.238},address:'Epstein Family Amphitheater, UC San Diego',source:'directory'},
{id:'dir-zanzibar',name:'Zanzibar Café',location:{lat:32.87937,lng:-117.23716},address:'Price Center, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-perks',name:'Perks',location:{lat:32.87951,lng:-117.2368},address:'UCSD Bookstore, 9500 Gilman Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-ventanas',name:'Café Ventanas',location:{lat:32.87622,lng:-117.23929},address:'Eleanor Roosevelt College, UC San Diego',source:'directory'},
{id:'dir-bella',name:'The Bella',location:{lat:32.88955,lng:-117.24396},address:'Sanford Consortium, 2880 Torrey Pines Scenic Dr, La Jolla, CA 92037',source:'directory'},
{id:'dir-peets-rimac',name:"Peet's Coffee — RIMAC Annex",location:{lat:32.8853,lng:-117.2392},address:'RIMAC Annex, 9860 Hopkins Dr, La Jolla, CA 92093',source:'directory'},
{id:'dir-cecils',name:"Cecil's Café",location:{lat:32.879,lng:-117.2365},address:'Sun God Lawn, UC San Diego',source:'directory'},
// La Jolla Village
{id:'dir-betterbuzz',name:'Better Buzz Coffee',location:{lat:32.84623,lng:-117.27529},address:'909 Prospect St, La Jolla, CA 92037',source:'directory'},
{id:'dir-brickbell',name:'Brick & Bell Café',location:{lat:32.84521,lng:-117.27442},address:'928 Silverado St, La Jolla, CA 92037',source:'directory'},
{id:'dir-livingroom',name:'The Living Room',location:{lat:32.84782,lng:-117.27497},address:'1010 Prospect St, La Jolla, CA 92037',source:'directory'},
{id:'dir-pannikin',name:'Pannikin',location:{lat:32.84027,lng:-117.27218},address:'7460 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-harrys',name:"Harry's Coffee Shop",location:{lat:32.84139,lng:-117.27256},address:'7545 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-coffeecup',name:'Coffee Cup',location:{lat:32.84685,lng:-117.27298},address:'1109 Wall St, La Jolla, CA 92037',source:'directory'},
{id:'dir-goldfish',name:'Goldfish Point Café',location:{lat:32.8496,lng:-117.27114},address:'1255 Coast Blvd, La Jolla, CA 92037',source:'directory'},
{id:'dir-dripz',name:'Dripz Coffee',location:{lat:32.8393,lng:-117.27689},address:'613 Pearl St, La Jolla, CA 92037',source:'directory'},
{id:'dir-ferlini',name:'Ferlini Coffee',location:{lat:32.839275,lng:-117.277089},address:'613 Pearl St, La Jolla, CA 92037',source:'directory'},
{id:'dir-elixir',name:'Elixir Espresso & Wine Bar',location:{lat:32.84655,lng:-117.27406},address:'7863 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-flowerpot',name:'The Flower Pot Cafe and Bakery',location:{lat:32.84072,lng:-117.27425},address:'7530 Fay Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-cala',name:'Cala La Jolla Café',location:{lat:32.84676,lng:-117.274732},address:'7910 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-lilli',name:'Il Giardino di Lilli',location:{lat:32.840241,lng:-117.272258},address:'7467 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-sugar',name:'Sugar and Scribe',location:{lat:32.84257,lng:-117.27482},address:'7660 Fay Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-encanto',name:'Encanto Cafe',location:{lat:32.84886,lng:-117.27121},address:'1261 Prospect St, La Jolla, CA 92037',source:'directory'},
{id:'dir-pinpoint-village',name:'Pinpoint Café',location:{lat:32.84723,lng:-117.27196},address:'7855 Ivanhoe Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-parakeet',name:'Parakeet Cafe',location:{lat:32.844922,lng:-117.274457},address:'927 Silverado St, La Jolla, CA 92037',source:'directory'},
{id:'dir-dunkin',name:"Dunkin'",location:{lat:32.840638,lng:-117.272884},address:'7514 Girard Ave, La Jolla, CA 92037',source:'directory'},
{id:'dir-subterranean',name:'Subterranean Coffee',location:{lat:32.8488,lng:-117.2717},address:'1237 Prospect St, La Jolla, CA 92037',source:'directory'},
// Bird Rock / Windansea
{id:'dir-birdrock',name:'Bird Rock Coffee Roasters',location:{lat:32.81447,lng:-117.26956},address:'5627 La Jolla Blvd, La Jolla, CA 92037',source:'directory'},
{id:'dir-wayfarer',name:'Wayfarer Bread',location:{lat:32.81302,lng:-117.26841},address:'5525 La Jolla Blvd, La Jolla, CA 92037',source:'directory'},
{id:'dir-immersion',name:'Immersion Coffee',location:{lat:32.83204,lng:-117.27635},address:'6905 La Jolla Blvd, La Jolla, CA 92037',source:'directory'},
{id:'dir-vahik',name:'Cafe Vahik',location:{lat:32.83027,lng:-117.27702},address:'6780 La Jolla Blvd, La Jolla, CA 92037',source:'directory'},
// La Jolla Shores / Scripps
{id:'dir-brickbell-shores',name:'Brick & Bell Café — La Jolla Shores',location:{lat:32.85406,lng:-117.25524},address:'2216 Avenida de la Playa, La Jolla, CA 92037',source:'directory'},
{id:'dir-carolines',name:"Caroline's Seaside Café",location:{lat:32.86447,lng:-117.2541},address:'8610 Kennel Way, La Jolla, CA 92093',source:'directory'},
{id:'dir-pinpoint-sio',name:'Pinpoint Café — Scripps',location:{lat:32.865,lng:-117.253},address:'Scripps Institution of Oceanography, UC San Diego',source:'directory'},
// UTC / University City
{id:'dir-philz',name:'Philz Coffee',location:{lat:32.86945,lng:-117.23184},address:'8849 Villa La Jolla Dr, La Jolla, CA 92037',source:'directory'},
{id:'dir-cafe477',name:'Cafe 477',location:{lat:32.871102,lng:-117.235871},address:'8950 Villa La Jolla Dr, Ste 123, La Jolla, CA 92037',source:'directory'},
{id:'dir-lacolombe',name:'La Colombe',location:{lat:32.872063,lng:-117.212614},address:'Westfield UTC, 4545 La Jolla Village Dr, San Diego, CA 92122',source:'directory'},
{id:'dir-starbucks-utc',name:'Starbucks — Westfield UTC',location:{lat:32.870743,lng:-117.21041},address:'Westfield UTC, 4545 La Jolla Village Dr, San Diego, CA 92122',source:'directory'},
{id:'dir-starbucks-governor',name:'Starbucks — Governor Dr',location:{lat:32.851701,lng:-117.215747},address:'3202 Governor Dr, San Diego, CA 92122',source:'directory'},
{id:'dir-bomdia',name:'Bom Dia Café',location:{lat:32.874693,lng:-117.206496},address:'4660 La Jolla Village Dr, Level P1, San Diego, CA 92122',source:'directory'},
{id:'dir-hannas',name:"Hanna's Creamery & Cafe",location:{lat:32.87118,lng:-117.21188},address:'Westfield UTC, 4545 La Jolla Village Dr, San Diego, CA 92122',source:'directory'},
{id:'dir-pinpoint-element',name:'Pinpoint Café — UTC',location:{lat:32.86984,lng:-117.22759},address:'8899 University Center Ln, San Diego, CA 92122',source:'directory'},
{id:'dir-peets-utc',name:"Peet's Coffee — UTC",location:{lat:32.86746,lng:-117.2068},address:'8905 Towne Centre Dr, San Diego, CA 92122',source:'directory'}
];
export const directory:Cafe[]=entries.map(c=>({...c,onCampus:c.location.lat>=32.876&&c.location.lng<=-117.23}));
