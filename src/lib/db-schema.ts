export type Match = {
  id: string;
  match_date: string;
  opponent_team: string;
  location: string | null;
  notes: string | null;
  created_at: string;
};

export type Player = {
  id: string;
  player_name: string;
  created_at: string;
};

export type SquadEntry = {
  id: string;
  match_id: string;
  player_id: string;
};

export type Management = {
  id: string;
  match_id: string;
  staff_name: string;
  role: string;
};

