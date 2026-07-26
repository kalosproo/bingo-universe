import type { BoardCell, WinPattern } from '../types';
export function hasBingo(cells: BoardCell[], size: number, pattern: WinPattern): boolean {
  if (!cells.length || cells.length !== size * size) return false;
  const m = (r:number,c:number)=>cells[r*size+c]?.marked;
  if (pattern === 'blackout') return cells.every(c=>c.marked);
  if (pattern === 'fourCorners') return m(0,0)&&m(0,size-1)&&m(size-1,0)&&m(size-1,size-1);
  for (let i=0;i<size;i++) if (Array.from({length:size},(_,j)=>m(i,j)).every(Boolean) || Array.from({length:size},(_,j)=>m(j,i)).every(Boolean)) return true;
  return Array.from({length:size},(_,i)=>m(i,i)).every(Boolean) || Array.from({length:size},(_,i)=>m(i,size-1-i)).every(Boolean);
}
