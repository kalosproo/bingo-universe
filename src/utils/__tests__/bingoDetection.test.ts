import { describe, expect, it } from 'vitest';
import { hasBingo } from '../bingoDetection';
const cells=(marked:number[])=>Array.from({length:25},(_,i)=>({id:String(i),value:i+1,marked:marked.includes(i)}));
describe('hasBingo',()=>{it('detects rows',()=>expect(hasBingo(cells([0,1,2,3,4]),5,'line')).toBe(true)); it('detects corners',()=>expect(hasBingo(cells([0,4,20,24]),5,'fourCorners')).toBe(true)); it('detects blackout',()=>expect(hasBingo(cells(Array.from({length:25},(_,i)=>i)),5,'blackout')).toBe(true));});
