import { useEffect, useState } from 'react';
import { db } from '../../frontend/services/firebase';
import { ref, onValue } from 'firebase/database';
import { LEADERBOARD_PATH } from '../constants';
import type { LeaderboardEntry } from '../utils';

export function useRealtimeLeaderboard(tournamentId: string = import.meta.env.VITE_TOURNAMENT_ID || 'dev-001') {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const r = ref(db, LEADERBOARD_PATH(tournamentId));
    return onValue(r, (snap) => {
      const v = snap.val() || {};
      const list: LeaderboardEntry[] = Object.values(v).sort((a: any, b: any) => (b.score || 0) - (a.score || 0));
      setEntries(list);
      setLoading(false);
    });
  }, [tournamentId]);

  return { entries, loading };
}
