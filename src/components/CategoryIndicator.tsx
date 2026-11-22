import { AlertTriangle, Archive, Leaf, Recycle } from 'lucide-react';
import type { AcceptanceStatus, WasteCategoryId } from '../data/wasteData';

interface CategoryIndicatorProps {
  categoryId: WasteCategoryId;
  label?: string;
}

export function CategoryIndicator({ categoryId, label }: CategoryIndicatorProps) {
  switch (categoryId) {
    case 'organik':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 whitespace-nowrap">
          <Leaf className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{label ?? 'Organik'}</span>
        </span>
      );
    case 'anorganik':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 whitespace-nowrap">
          <Recycle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{label ?? 'Anorganik'}</span>
        </span>
      );
    case 'residu':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 whitespace-nowrap">
          <Archive className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{label ?? 'Residu'}</span>
        </span>
      );
    case 'b3':
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 whitespace-nowrap">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{label ?? 'B3 Rumah Tangga'}</span>
        </span>
      );
  }
}

interface AcceptanceIndicatorProps {
  status: AcceptanceStatus;
  label: string;
}

export function AcceptanceIndicator({ status, label }: AcceptanceIndicatorProps) {
  const colorMap: Record<AcceptanceStatus, string> = {
    diterima: 'text-emerald-900 bg-emerald-50 border-emerald-200',
    bersyarat: 'text-amber-900 bg-amber-50 border-amber-200',
    tidak_diterima: 'text-stone-700 bg-stone-100 border-stone-200',
  };

  const prefixMap: Record<AcceptanceStatus, string> = {
    diterima: 'Bisa Disetor:',
    bersyarat: 'Bersyarat:',
    tidak_diterima: 'Tidak Disetor:',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium whitespace-nowrap ${colorMap[status]}`}
    >
      <span className="sr-only">{prefixMap[status]}</span>
      <span>{label}</span>
    </span>
  );
}
