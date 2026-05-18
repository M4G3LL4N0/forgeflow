type ChecklistItem = {
  id: string;
  label: string;
  required: boolean;
  status: "ready" | "attention" | "blocked";
};

type SupplierReadyChecklistProps = {
  items: ChecklistItem[];
};

const statusStyles = {
  ready: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
  attention: "border-forge-500/20 bg-forge-500/5 text-forge-300",
  blocked: "border-red-500/20 bg-red-500/5 text-red-300",
};

export function SupplierReadyChecklist({ items }: SupplierReadyChecklistProps) {
  return (
    <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Supplier-ready checklist</p>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item.id} className={`rounded-xl border px-4 py-3 ${statusStyles[item.status]}`}>
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-steel-100">{item.label}</p>
              <span className="text-xs uppercase">{item.status}</span>
            </div>
            {item.required ? <p className="mt-2 text-xs text-steel-500">Required before quote release</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
