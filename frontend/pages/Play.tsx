import { useEffect, useRef } from 'react';
import TournamentUI from '../components/TournamentUI';
import Leaderboard from '../components/Leaderboard';

export default function Play() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import('@games/blockblast/main').then(({ mountPhaser }) => {
      if (containerRef.current) {
        cleanup = mountPhaser(containerRef.current);
      }
    });
    return () => cleanup?.();
  }, []);

  return (
    <div className="grid md:grid-cols-[1fr_380px] gap-6">
      <div className="glass rounded-2xl p-3">
        <div ref={containerRef} className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] rounded-lg overflow-hidden" />
      </div>
      <div className="space-y-4">
        <TournamentUI />
        <Leaderboard />
      </div>
    </div>
  );
}
