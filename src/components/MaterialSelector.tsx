import { materials, type MaterialId } from "@/lib/forgeflow-data";

type MaterialSelectorProps = {
  value: MaterialId;
  onChange: (value: MaterialId) => void;
};

export function MaterialSelector({ value, onChange }: MaterialSelectorProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Material</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as MaterialId)}
        className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none transition focus:border-ops-400"
      >
        {materials.map((material) => (
          <option key={material.id} value={material.id}>
            {material.label}
          </option>
        ))}
      </select>
    </label>
  );
}
