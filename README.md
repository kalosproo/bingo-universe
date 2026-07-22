# BingoVerse

BingoVerse is a React 19 + Vite + TypeScript realtime bingo app using Tailwind CSS, React Router v6, Framer Motion, React Icons, and Firebase Auth/Firestore/Hosting.

## Setup

```bash
npm install
cp .env.example .env
# Fill in Firebase web credentials
npm run dev
```

## Firebase schema

- `rooms/{roomId}`: `code`, `hostId`, `settings`, `participants`, `status`, `calledNumbers`, `winnerIds`, timestamps.
- `rooms/{roomId}/messages/{messageId}`: sanitized `text`, `uid`, `displayName`, `createdAt`.
- `rooms/{roomId}/boards/{uid}`: per-player board state.

## Scripts

- `npm run dev` starts Vite.
- `npm run build` type-checks and builds.
- `npm test` runs Vitest tests.

## Deploy

```bash
npm run build
firebase deploy
```
