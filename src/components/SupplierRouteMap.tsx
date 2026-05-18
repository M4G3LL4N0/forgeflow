type SupplierRouteMapProps = {
  routeLabel: string;
  hubs: string[];
  stages: string[];
  notes: string[];
};

export function SupplierRouteMap({ routeLabel, hubs, stages, notes }: SupplierRouteMapProps) {
  return (
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Supplier route map</p>
          <p className="mt-2 text-xl font-semibold text-white">{routeLabel}</p>
        </div>
        <span className="rounded-full border border-ops-500/30 bg-ops-500/10 px-3 py-1 text-xs text-ops-300">
          {hubs.length} hubs
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {hubs.map((hub) => (
          <span key={hub} className="rounded-full border border-steel-700 px-3 py-1 text-xs text-steel-300">
            {hub}
          </span>
        ))}
      </div>
      <ol className="mt-6 space-y-3">
        {stages.map((stage, index) => (
          <li key={stage} className="flex items-start gap-3 rounded-xl border border-steel-800 bg-graphite-950/60 px-4 py-3">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-forge-500/15 text-xs font-semibold text-forge-300">
              {index + 1}
            </span>
            <span className="text-sm text-steel-200">{stage}</span>
          </li>
        ))}
      </ol>
      <div className="mt-6 space-y-2">
        {notes.map((note) => (
          <p key={note} className="text-sm leading-6 text-steel-400">
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}
