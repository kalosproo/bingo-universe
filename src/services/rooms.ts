import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/app';
import type { RoomSettings } from '../types';
import { generateRoomCode } from '../utils/roomCode';
import { sanitizeChat } from '../utils/sanitize';
export async function createRoom(hostId:string, settings:RoomSettings){ const ref=await addDoc(collection(db,'rooms'),{code:generateRoomCode(),hostId,settings,participants:[hostId],status:'lobby',calledNumbers:[],winnerIds:[],createdAt:serverTimestamp(),updatedAt:serverTimestamp()}); return ref.id; }
export const joinRoom=(roomId:string,uid:string)=>updateDoc(doc(db,'rooms',roomId),{participants:arrayUnion(uid),updatedAt:serverTimestamp()});
export const callNumber=(roomId:string,n:number)=>updateDoc(doc(db,'rooms',roomId),{calledNumbers:arrayUnion(n),status:'playing',updatedAt:serverTimestamp()});
export const declareWinner=(roomId:string,uid:string)=>updateDoc(doc(db,'rooms',roomId),{winnerIds:arrayUnion(uid),status:'finished',updatedAt:serverTimestamp()});
export async function sendMessage(roomId:string, uid:string, displayName:string, text:string){ const clean=sanitizeChat(text); if(!clean) return; await addDoc(collection(db,'rooms',roomId,'messages'),{uid,displayName,text:clean,createdAt:serverTimestamp()}); }
