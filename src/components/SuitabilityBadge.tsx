import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import type { BioporiSuitability } from '../data/bioporiData';

interface SuitabilityBadgeProps {
  suitability: BioporiSuitability;
  label: string;
}

export function SuitabilityBadge({ suitability, label }: SuitabilityBadgeProps) {
  const styles: Record<BioporiSuitability, string> = {
    dianjurkan: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    bersyarat: 'bg-amber-50 text-amber-900 border-amber-200',
    tidak_dianjurkan: 'bg-red-50 text-red-900 border-red-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium whitespace-nowrap ${styles[suitability]}`}
    >
      {suitability === 'dianjurkan' && (
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-800" aria-hidden="true" />
      )}
      {suitability === 'bersyarat' && (
        <Info className="w-3.5 h-3.5 shrink-0 text-amber-800" aria-hidden="true" />
      )}
      {suitability === 'tidak_dianjurkan' && (
        <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-800" aria-hidden="true" />
      )}
      <span>{label}</span>
    </span>
  );
}
