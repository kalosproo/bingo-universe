import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/app';
import type { ChatMessage } from '../types';
export function useMessages(roomId?:string){ const [messages,setMessages]=useState<ChatMessage[]>([]); useEffect(()=>{ if(!roomId) return; const q=query(collection(db,'rooms',roomId,'messages'),orderBy('createdAt','asc')); return onSnapshot(q,s=>setMessages(s.docs.map(d=>({id:d.id,...d.data()} as ChatMessage))))},[roomId]); return messages; }
