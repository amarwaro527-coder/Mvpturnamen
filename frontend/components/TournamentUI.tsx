import { useEffect, useMemo, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../services/firebase';

interface RoomInfo { id: string; players: number; round: number; status: 'waiting'|'running'|'ended'; }

export default function TournamentUI() {
  const [room, setRoom] = useState<RoomInfo | null>(null);

  useEffect(() => {
    const roomId = localStorage.getItem('roomId') || 'room-1';
    const r = ref(db, `tournaments/${import.meta.env.VITE_TOURNAMENT_ID || 'dev-001'}/rooms/${roomId}`);
    return onValue(r, (snap) => {
      const v = snap.val();
      if (v) setRoom({ id: roomId, players: v.playersCount || 1, round: v.round || 1, status: v.status || 'waiting' });
    });
  }, []);

  const badge = useMemo(() => {
    switch (room?.status) {
      case 'running': return 'bg-emerald-500/20 text-emerald-300';
      case 'ended': return 'bg-red-500/20 text-red-300';
      default: return 'bg-yellow-500/20 text-yellow-300';
    }
  }, [room]);

  return (
    <div className="glass rounded-xl p-4 flex items-center justify-between animate-float">
      <div>
        <div className="text-sm opacity-80">Room</div>
        <div className="text-xl font-semibold">{room?.id || '—'}</div>
      </div>
      <div>
        <div className="text-sm opacity-80">Players</div>
        <div className="text-xl font-semibold">{room?.players ?? '—'} / 10</div>
      </div>
      <div>
        <div className="text-sm opacity-80">Round</div>
        <div className="text-xl font-semibold">{room?.round ?? '—'}</div>
      </div>
      <div className={`px-3 py-1 rounded-full text-sm ${badge}`}>{room?.status || 'waiting'}</div>
    </div>
  );
}
