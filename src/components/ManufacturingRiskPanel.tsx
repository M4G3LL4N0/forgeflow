type ManufacturingRiskPanelProps = {
  qaRiskNotes: string[];
  bottlenecks: string[];
};

export function ManufacturingRiskPanel({ qaRiskNotes, bottlenecks }: ManufacturingRiskPanelProps) {
  return (
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Manufacturing risk</p>
      <div className="mt-5 space-y-3">
        {qaRiskNotes.map((note) => (
          <div key={note} className="rounded-xl border border-ops-500/20 bg-ops-500/5 px-4 py-3 text-sm leading-6 text-steel-200">
            {note}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Bottlenecks</p>
        <div className="mt-3 space-y-2">
          {bottlenecks.length === 0 ? (
            <p className="text-sm text-steel-400">No hard bottlenecks flagged for this build profile.</p>
          ) : (
            bottlenecks.map((item) => (
              <p key={item} className="rounded-xl border border-forge-500/20 bg-forge-500/5 px-4 py-3 text-sm text-steel-200">
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
