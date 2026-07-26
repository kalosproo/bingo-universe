const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export function generateRoomCode(length = 6): string {
  return Array.from({ length }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');
}
export function isValidRoomCode(code: string): boolean { return /^[A-Z0-9]{6}$/.test(code.trim().toUpperCase()); }
