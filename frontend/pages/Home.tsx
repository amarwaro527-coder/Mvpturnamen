import Leaderboard from '../components/Leaderboard';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Skill-Based HTML5 Tournaments
        </h1>
        <p className="opacity-80 max-w-2xl mx-auto">
          Fast 1–3 minute matches. Real-time leaderboards. Built for mobile and 60 FPS.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/play" className="px-5 py-3 rounded-lg bg-primary hover:bg-violet-600 transition-colors font-semibold shadow-glass">
            Play Now
          </Link>
          <Link to="/profile" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors font-semibold">
            Profile
          </Link>
        </div>
      </section>
      <Leaderboard />
    </div>
  );
}
