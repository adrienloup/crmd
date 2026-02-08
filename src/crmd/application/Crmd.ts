import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';
import type { CrmdFiltersType } from '@/src/crmd/infrastructure/ui/filters/CrmdFilters.ts';

export interface CrmdStateType {
  reports: CrmdReportType[];
  filters: CrmdFiltersType;
}

export type CrmdDispatchType =
  | { type: 'INIT_DATA'; reports: CrmdReportType[] }
  | { type: 'SET_FILTERS'; filters: CrmdFiltersType }
  | { type: 'CLEAR_FILTER'; filter: keyof CrmdFiltersType }
  | { type: 'RESET_FILTERS' };
