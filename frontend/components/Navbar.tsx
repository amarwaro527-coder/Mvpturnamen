import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-wide text-xl">
          <span className="text-accent">Skill</span>
          <span className="text-primary">Play</span>
        </Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>Home</NavLink>
          <NavLink to="/play" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>Play</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>Profile</NavLink>
          <NavLink to="/admin" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}
