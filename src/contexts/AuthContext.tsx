import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth } from '../firebase/app';
const AuthContext = createContext<{user: User|null; loading:boolean; loginGoogle:()=>Promise<void>; loginGuest:()=>Promise<{ user: User }>; logout:()=>Promise<void>}|null>(null);
export function AuthProvider({children}:{children:ReactNode}){ const [user,setUser]=useState<User|null>(null); const [loading,setLoading]=useState(true); useEffect(()=>onAuthStateChanged(auth,u=>{setUser(u);setLoading(false)}),[]); const value=useMemo(()=>({user,loading,loginGoogle:async()=>{await signInWithPopup(auth,new GoogleAuthProvider())},loginGuest:()=>signInAnonymously(auth),logout:()=>signOut(auth)}),[user,loading]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>}
export const useAuth=()=>{const v=useContext(AuthContext); if(!v) throw new Error('useAuth must be used within AuthProvider'); return v};
