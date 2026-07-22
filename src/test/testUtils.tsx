import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
let roots: Root[] = [];
export function render(ui: React.ReactElement){ const container=document.createElement('div'); document.body.appendChild(container); const root=createRoot(container); roots.push(root); act(()=>root.render(ui)); return {container}; }
export function cleanup(){ roots.forEach(r=>act(()=>r.unmount())); roots=[]; document.body.innerHTML=''; }
export function byText(text: string | RegExp){ const all=[...document.body.querySelectorAll('*')]; const found=all.find(el=> typeof text==='string' ? el.textContent===text : text.test(el.textContent||'')); if(!found) throw new Error(`Missing text ${text}`); return found as HTMLElement; }
