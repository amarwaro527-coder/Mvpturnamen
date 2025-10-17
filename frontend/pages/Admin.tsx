import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { ref, set, get, child } from 'firebase/database';

export default function Admin() {
  const [status, setStatus] = useState<'waiting'|'running'|'ended'>('waiting');
  const [round, setRound] = useState(1);

  useEffect(() => {
    (async () => {
      const root = ref(db);
      const snap = await get(child(root, `tournaments/${import.meta.env.VITE_TOURNAMENT_ID || 'dev-001'}/status`));
      if (snap.exists()) {
        setStatus(snap.val()?.status || 'waiting');
        setRound(snap.val()?.round || 1);
      }
    })();
  }, []);

  const write = async (key: string, val: any) => {
    await set(ref(db, `tournaments/${import.meta.env.VITE_TOURNAMENT_ID || 'dev-001'}/${key}`), val);
  };

  return (
    <div className="glass rounded-2xl p-6 max-w-xl space-y-4">
      <h2 className="text-2xl font-bold mb-2">Admin Panel</h2>
      <div className="flex items-center gap-3">
        <button className="px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700" onClick={() => { setStatus('running'); write('status', { status: 'running', round }); }}>Start</button>
        <button className="px-3 py-2 rounded-md bg-yellow-600 hover:bg-yellow-700" onClick={() => { setStatus('waiting'); write('status', { status: 'waiting', round: 1 }); }}>Reset</button>
        <button className="px-3 py-2 rounded-md bg-rose-600 hover:bg-rose-700" onClick={() => { setStatus('ended'); write('status', { status: 'ended', round }); }}>Stop</button>
      </div>
      <div className="flex items-center gap-3">
        <span>Round:</span>
        <input type="number" value={round} min={1} onChange={(e) => setRound(Number(e.target.value))} className="px-3 py-2 bg-white/10 rounded-md w-24" />
        <button className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15" onClick={() => write('status', { status, round })}>Update</button>
      </div>
      <div className="pt-4 border-t border-white/10">
        <button className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15" onClick={() => write('leaderboard', null)}>Reset Leaderboard</button>
      </div>
    </div>
  );
}
