import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/app';
import type { Room } from '../types';
export function useRoom(roomId?:string){ const [room,setRoom]=useState<Room|null>(null); const [loading,setLoading]=useState(Boolean(roomId)); useEffect(()=>{ if(!roomId) return; return onSnapshot(doc(db,'rooms',roomId),s=>{setRoom(s.exists()?{id:s.id,...s.data()} as Room:null);setLoading(false)})},[roomId]); return {room,loading}; }
