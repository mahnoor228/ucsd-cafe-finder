import type {Cafe} from '../types';
// A clearly labelled, offline discovery directory. Locations are approximate and are NOT live Google data.
// Live Google Places results replace matching directory entries when configured.
const entries:Cafe[]=[
{id:'dir-moms',name:"M.O.M.'s Café",location:{lat:32.8786,lng:-117.2422},address:'Muir College, UC San Diego',source:'directory'},
{id:'dir-art',name:'Art of Espresso',location:{lat:32.8780,lng:-117.2352},address:'Mandeville Center, UC San Diego',source:'directory'},
{id:'dir-audrey',name:"Audrey's Café",location:{lat:32.8812,lng:-117.2375},address:'Geisel Library, UC San Diego',source:'directory'},
{id:'dir-starbucks-pc',name:'Starbucks — Price Center',location:{lat:32.8796,lng:-117.2366},address:'Price Center, UC San Diego',source:'directory'},
{id:'dir-birdrock',name:'Bird Rock Coffee Roasters',location:{lat:32.8718,lng:-117.2144},address:'La Jolla / UCSD area',source:'directory'},
{id:'dir-pinpoint',name:'Pinpoint Café',location:{lat:32.8756,lng:-117.2364},address:'UC San Diego area',source:'directory'},
{id:'dir-bluebowl',name:'Blue Bowl',location:{lat:32.8798,lng:-117.2357},address:'Price Center, UC San Diego',source:'directory'},
{id:'dir-betterbuzz',name:'Better Buzz Coffee',location:{lat:32.8695,lng:-117.2321},address:'La Jolla Village area',source:'directory'}
];
export const directory:Cafe[]=entries.map(c=>({...c,onCampus:c.location.lat>=32.876&&c.location.lng<=-117.23}));
