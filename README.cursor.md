# Skill-Based HTML5 Tournament Platform (MVP)

Fast scaffold for a Phaser 3 + React (Vite) + Firebase RTDB + Supabase MVP.

## Run guide

```bash
npm install
npm run dev
```

- Local: http://localhost:5173

## Structure

- `frontend/` React + Tailwind UI + Phaser mount
- `games/blockblast/` Phaser 3 game (scenes + logic)
- `backend/` Tournament logic + Firebase/Supabase config + score API
- `shared/` Constants, utils, types, realtime hooks
- `assets/` Public assets (served by Vite)

## Notes
- Uses Vite for build speed and dev server
- Mobile-first UI, 60 FPS target
- Firebase Auth (Google/Email) and RTDB for realtime
- Supabase client scaffolded for future features

## Env
Create a `.env` in repo root (optional for local dev):
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_DATABASE_URL=...
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_TOURNAMENT_ID=dev-001
```

---

Future upgrades:
- TON/USDT prize pool smart contract
- Telegram Mini App login + notifications
- Anti-cheat score validation + server sync
