export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function nowMs(): number {
  return Date.now();
}

export type LeaderboardEntry = {
  userId: string;
  nickname: string;
  avatarUrl?: string;
  score: number;
};
