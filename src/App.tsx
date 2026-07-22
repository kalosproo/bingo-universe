import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
const Home=lazy(()=>import('./pages/Home')); const RoomPage=lazy(()=>import('./pages/RoomPage')); const About=lazy(()=>import('./pages/About'));
export default function App(){return <><nav className="flex gap-4 p-4"><Link to="/">BingoVerse</Link><Link to="/about">About</Link></nav><Suspense fallback={<p className="p-8">Loading…</p>}><Routes><Route path="/" element={<Home/>}/><Route path="/room/:roomId" element={<RoomPage/>}/><Route path="/about" element={<About/>}/></Routes></Suspense></>}
