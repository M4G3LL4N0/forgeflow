type CostEstimateBoardProps = {
  low: number;
  high: number;
  midpoint: number;
  quantity: number;
};

export function CostEstimateBoard({ low, high, midpoint, quantity }: CostEstimateBoardProps) {
  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Cost estimate</p>
      <p className="mt-4 text-3xl font-semibold text-white">{formatter.format(low)} – {formatter.format(high)}</p>
      <p className="mt-2 text-sm text-steel-400">Midpoint {formatter.format(midpoint)} for {quantity} prototype units</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">Low case</p>
          <p className="mt-2 text-lg font-medium text-steel-100">{formatter.format(low)}</p>
        </div>
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">Expected</p>
          <p className="mt-2 text-lg font-medium text-forge-300">{formatter.format(midpoint)}</p>
        </div>
        
        <div className="rounded-xl border border-steel-800 bg-graphite-950/70 p-4">
          <p className="text-xs text-steel-500">High case</p>
          <p className="mt-2 text-lg font-medium text-steel-100">{formatter.format(high)}</p>
        </div>
      </div>
    </div>
  );
}
