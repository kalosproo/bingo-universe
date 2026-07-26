import type { BoardCell } from '../types';
export function generateBoard(size: 3 | 5 = 5, allowFreeSpace = true): BoardCell[] {
  const total = size * size; const nums = Array.from({length:75},(_,i)=>i+1).sort(()=>Math.random()-.5).slice(0,total);
  const mid = Math.floor(total/2);
  return nums.map((n,i)=> allowFreeSpace && size % 2 === 1 && i === mid ? {id:`cell-${i}`, value:'FREE', marked:true, free:true} : {id:`cell-${i}`, value:n, marked:false});
}
export function markBoard(cells: BoardCell[], called: number[]): BoardCell[] { return cells.map(c => c.free ? c : {...c, marked: typeof c.value === 'number' && called.includes(c.value)}); }
