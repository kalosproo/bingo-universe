import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
const ThemeContext=createContext<{theme:'light'|'dark';toggle:()=>void}|null>(null);
export function ThemeProvider({children}:{children:ReactNode}){const [theme,setTheme]=useState<'light'|'dark'>('dark'); useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark')},[theme]); const value=useMemo(()=>({theme,toggle:()=>setTheme(t=>t==='dark'?'light':'dark')}),[theme]); return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>}
export const useTheme=()=>{const v=useContext(ThemeContext); if(!v) throw new Error('useTheme must be used within ThemeProvider'); return v};
