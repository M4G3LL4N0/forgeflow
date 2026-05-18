import { toleranceLevels, type ToleranceLevelId } from "@/lib/forgeflow-data";

type ToleranceInputProps = {
  value: ToleranceLevelId;
  onChange: (value: ToleranceLevelId) => void;
};

export function ToleranceInput({ value, onChange }: ToleranceInputProps) {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Tolerance level</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {toleranceLevels.map((level) => {
          const active = value === level.id;
          return (
            <button
              key={level.id}
              type="button"
              onClick={() => onChange(level.id)}
              className={`rounded-xl border px-4 py-3 text-left transition ${
                active
                  ? "border-forge-500/60 bg-forge-500/10 text-white"
                  : "border-steel-800 bg-graphite-900/70 text-steel-300 hover:border-steel-600"
              }`}
            >
              <p className="text-sm font-medium">{level.label}</p>
              <p className="mt-1 text-xs text-steel-500">{level.risk} inspection load</p>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}