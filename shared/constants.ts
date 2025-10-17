export const BOARD_SIZE = 10;
export const CELL_SIZE = 48; // px in canvas units; scaled responsively
export const ROUND_DURATION_MS = 90_000; // 1.5 minutes
export const ROOM_SIZE = 10;
export const LEADERBOARD_PATH = (tournamentId: string) => `tournaments/${tournamentId}/leaderboard`;
export const SCORES_PATH = (tournamentId: string) => `tournaments/${tournamentId}/scores`;
export const ROOMS_PATH = (tournamentId: string) => `tournaments/${tournamentId}/rooms`;
