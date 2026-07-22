import { describe, expect, it } from 'vitest';
import { generateRoomCode, isValidRoomCode } from '../roomCode';
describe('roomCode',()=>{it('generates six character codes',()=>expect(isValidRoomCode(generateRoomCode())).toBe(true)); it('rejects malformed codes',()=>expect(isValidRoomCode('oops')).toBe(false));});
