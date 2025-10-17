import { useEffect, useState } from 'react';
import { auth, providerGoogle, signInWithPopup, signOut } from '../services/firebase';

export default function Profile() {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    return auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="glass rounded-2xl p-6 max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {user ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={user.photoURL || 'https://i.pravatar.cc/80'} alt="avatar" className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-semibold">{user.displayName || 'Player'}</div>
              <div className="text-sm opacity-70">{user.email}</div>
            </div>
          </div>
          <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/15" onClick={() => signOut(auth)}>Sign out</button>
        </div>
      ) : (
        <button
          className="px-4 py-2 rounded-md bg-primary hover:bg-violet-600 font-semibold"
          onClick={() => signInWithPopup(auth, providerGoogle)}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
