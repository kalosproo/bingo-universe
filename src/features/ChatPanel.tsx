import { FormEvent, useState } from 'react';
import { useMessages } from '../hooks/useMessages';
import { sendMessage } from '../services/rooms';
import { useAuth } from '../contexts/AuthContext';
export function ChatPanel({roomId}:{roomId:string}){ const msgs=useMessages(roomId); const {user}=useAuth(); const [text,setText]=useState(''); async function submit(e:FormEvent){e.preventDefault(); if(user&&text.trim()) {await sendMessage(roomId,user.uid,user.displayName||'Guest',text); setText('')}} return <aside className="rounded-2xl bg-white/10 p-4"><h2 className="font-bold">Chat</h2><div className="h-48 overflow-auto">{msgs.map(m=><p key={m.id}><b>{m.displayName}:</b> {m.text}</p>)}</div><form onSubmit={submit} className="flex gap-2"><input aria-label="chat message" className="min-w-0 flex-1 rounded px-3 py-2 text-slate-950" maxLength={240} value={text} onChange={e=>setText(e.target.value)}/><button className="rounded bg-indigo-500 px-3">Send</button></form></aside>}
