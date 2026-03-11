import { createSupabaseServerClient } from "@/lib/supabase-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getDashboardStats() {
  const supabase = createSupabaseServerClient();

  const [{ count: matches }, { count: squads }, playersRes, topPlayerRes] =
    await Promise.all([
      supabase.from("Matches").select("id", { count: "exact", head: true }),
      supabase
        .from("SquadEntries")
        .select("id", { count: "exact", head: true }),
      supabase.from("Players").select("id", { count: "exact", head: true }),
      supabase
        .from("SquadEntries")
        .select("player_id, Players(player_name)", { count: "exact" })
        .limit(1)
        .order("count", { ascending: false, referencedTable: undefined })
    ]);

  const mostSelectedPlayer =
    topPlayerRes.data && topPlayerRes.data.length > 0
      ? (topPlayerRes.data[0] as any).Players?.player_name ?? "—"
      : "—";

  return {
    matches: matches ?? 0,
    squads: squads ?? 0,
    players: playersRes.count ?? 0,
    mostSelectedPlayer
  };
}

export async function DashboardStats() {
  const stats = await getDashboardStats();

  return (
    <div className="grid gap-3 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold text-emerald-300">
            {stats.matches}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total players used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold text-emerald-300">
            {stats.players}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total squad entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold text-emerald-300">
            {stats.squads}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Most selected player</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="truncate text-sm font-medium text-emerald-200">
            {stats.mostSelectedPlayer}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

