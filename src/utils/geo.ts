import type {Point} from '../types';
export function miles(a:Point,b:Point){const r=3958.7613,rad=Math.PI/180,dlat=(b.lat-a.lat)*rad,dlng=(b.lng-a.lng)*rad;const x=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlng/2)**2;return 2*r*Math.asin(Math.min(1,Math.sqrt(x)));}
export function walkMinutes(mi:number){return Math.max(1,Math.round(mi/3*60));}
export function campusApprox(p:Point){return p.lat>=32.8665&&p.lat<=32.8955&&p.lng>=-117.253&&p.lng<=-117.222;}
export function mapsDirections(c:Point,origin:Point,mode:string){const o=`${origin.lat},${origin.lng}`,d=`${c.lat},${c.lng}`;return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(o)}&destination=${encodeURIComponent(d)}&travelmode=${mode.toLowerCase()}`;}
export function priceLabel(v?:string){if(!v)return 'Price unavailable';return ({PRICE_LEVEL_FREE:'Free',PRICE_LEVEL_INEXPENSIVE:'$',PRICE_LEVEL_MODERATE:'$$',PRICE_LEVEL_EXPENSIVE:'$$$',PRICE_LEVEL_VERY_EXPENSIVE:'$$$$'} as Record<string,string>)[v]||v;}
