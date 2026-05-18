type ManufacturingTimelineProps = {
  optimistic: number;
  expected: number;
  conservative: number;
  stages: { stage: string; days: number; status: "complete" | "active" | "upcoming" }[];
};

export function ManufacturingTimeline({ optimistic, expected, conservative, stages }: ManufacturingTimelineProps) {
  return (
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Lead-time tracker</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">Optimistic</p>
          <p className="mt-2 text-2xl font-semibold text-ops-300">{optimistic}d</p>
        </div>
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">Expected</p>
          <p className="mt-2 text-2xl font-semibold text-white">{expected}d</p>
        </div>
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">Conservative</p>
          <p className="mt-2 text-2xl font-semibold text-forge-300">{conservative}d</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {stages.map((item) => (
          <div key={item.stage} className="flex items-center justify-between rounded-xl border border-steel-800 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-steel-100">{item.stage}</p>
              <p className="text-xs text-steel-500">{item.days} day window</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs ${
                item.status === "active"
                  ? "bg-ops-500/15 text-ops-300"
                  : item.status === "complete"
                    ? "bg-emerald-500/10 text-emerald-300"
                    : "bg-steel-800 text-steel-400"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
