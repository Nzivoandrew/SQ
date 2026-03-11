import { Suspense } from "react";
import { DashboardStats } from "./dashboard/dashboard-stats";
import { DashboardCharts } from "./dashboard/dashboard-charts";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-100 md:text-2xl">
          Squad Overview
        </h1>
        <p className="mt-1 text-xs text-slate-400 md:text-sm">
          Monitor match volume, player usage, and selection trends for your
          rugby squad.
        </p>
      </div>

      <Suspense fallback={<div className="text-xs text-slate-400">Loading statistics...</div>}>
        <DashboardStats />
      </Suspense>

      <Suspense fallback={<div className="text-xs text-slate-400">Loading charts...</div>}>
        <DashboardCharts />
      </Suspense>
    </div>
  );
}

