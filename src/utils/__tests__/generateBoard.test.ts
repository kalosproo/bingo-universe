import { describe, expect, it } from 'vitest';
import { generateBoard, markBoard } from '../generateBoard';
describe('generateBoard',()=>{it('creates a free center',()=>{const b=generateBoard(5,true); expect(b).toHaveLength(25); expect(b[12].value).toBe('FREE'); expect(b[12].marked).toBe(true)}); it('marks called numbers',()=>{const b=markBoard([{id:'a',value:7,marked:false}], [7]); expect(b[0].marked).toBe(true)});});
