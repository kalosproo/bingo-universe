import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BingoBoard } from '../components/BingoBoard';
import { CallerPanel } from '../components/CallerPanel';
import { WinnerModal } from '../components/WinnerModal';
import { ChatPanel } from '../features/ChatPanel';
import { useRoom } from '../hooks/useRoom';
import { callNumber, declareWinner } from '../services/rooms';
import { generateBoard, markBoard } from '../utils/generateBoard';
import { hasBingo } from '../utils/bingoDetection';
import { useAuth } from '../contexts/AuthContext';
export default function RoomPage(){ const {roomId}=useParams(); const {room}=useRoom(roomId); const {user}=useAuth(); const [local,setLocal]=useState(()=>generateBoard(5,true)); const size=room?.settings.gridSize ?? 5; const cells=useMemo(()=>markBoard(local,room?.calledNumbers ?? []),[local,room]); const won=hasBingo(cells,size,room?.settings.winPattern ?? 'line'); return <main className="grid gap-6 p-6 lg:grid-cols-[1fr_22rem]"><section><h1 className="text-3xl font-black">Room {room?.code ?? roomId}</h1><BingoBoard cells={cells} size={size} onToggle={id=>setLocal(c=>c.map(x=>x.id===id?{...x,marked:!x.marked}:x))}/>{won&&<button className="mt-4 rounded bg-emerald-500 px-4 py-2" onClick={()=>roomId&&user&&declareWinner(roomId,user.uid)}>Declare Bingo</button>}</section><div className="space-y-4"><CallerPanel called={room?.calledNumbers ?? []} onCall={n=>roomId&&callNumber(roomId,n)}/>{roomId&&<ChatPanel roomId={roomId}/>}</div><WinnerModal open={Boolean(room?.winnerIds?.length)} winner={room?.winnerIds?.[0] ?? ''} onClose={()=>{}}/></main>}
