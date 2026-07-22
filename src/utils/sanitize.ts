export function sanitizeChat(input: string): string { return input.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 240); }
export function validateRoomSettings(s: {gridSize:number; maxPlayers:number}) { return (s.gridSize === 3 || s.gridSize === 5) && s.maxPlayers >= 2 && s.maxPlayers <= 50; }
