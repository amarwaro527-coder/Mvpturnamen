import { useRealtimeLeaderboard } from '@shared/hooks/useRealtimeLeaderboard';

export default function Leaderboard() {
  const { entries, loading } = useRealtimeLeaderboard();

  return (
    <section className="glass rounded-xl p-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Leaderboard</h2>
        {loading && <span className="text-xs opacity-70">Syncing…</span>}
      </div>
      <ol className="divide-y divide-white/10">
        {entries.slice(0, 10).map((e, idx) => (
          <li key={e.userId} className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 text-right opacity-70">{idx + 1}</span>
              <img src={e.avatarUrl || 'https://i.pravatar.cc/32'} alt="avatar" className="w-8 h-8 rounded-full" />
              <span className="font-medium">{e.nickname || 'Player'}</span>
            </div>
            <div className="font-bold text-accent">{e.score}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
