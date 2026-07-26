export type WinPattern = 'line' | 'fourCorners' | 'blackout';
export type RoomStatus = 'lobby' | 'playing' | 'finished';
export interface RoomSettings { gridSize: 3 | 5; winPattern: WinPattern; maxPlayers: number; allowFreeSpace: boolean; }
export interface Room { id: string; code: string; hostId: string; settings: RoomSettings; participants: string[]; status: RoomStatus; calledNumbers: number[]; winnerIds: string[]; createdAt?: unknown; updatedAt?: unknown; }
export interface BoardCell { id: string; value: number | 'FREE'; marked: boolean; free?: boolean; }
export interface ChatMessage { id: string; uid: string; displayName: string; text: string; createdAt?: unknown; }
