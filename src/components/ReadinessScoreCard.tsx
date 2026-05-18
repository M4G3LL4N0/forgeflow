type ReadinessScoreCardProps = {
  score: number;
  label: string;
};

export function ReadinessScoreCard({ score, label }: ReadinessScoreCardProps) {
  const tone = score >= 85 ? "text-ops-300" : score >= 68 ? "text-forge-300" : "text-red-300";

  return (
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Prototype readiness</p>
      <div className="mt-4 flex items-end gap-3">
        <p className={`text-5xl font-semibold tabular-nums ${tone}`}>{score}</p>
        <p className="pb-2 text-sm text-steel-400">/ 100</p>
      </div>
      <p className="mt-3 text-sm text-steel-200">{label}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-steel-800">
        <div className="h-full rounded-full bg-gradient-to-r from-forge-500 to-ops-400" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}