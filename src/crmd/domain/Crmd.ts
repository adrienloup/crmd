import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';

export interface CrmdType {
  reports: CrmdReportType[];
  // filters: CrmdFilters;
  // page: number;
  // pageSize: number;
  isLoaded: boolean;
}

// export type CrmdDispatch = (action: CrmdAction) => void;

export type CrmdDispatchType = { type: 'INIT_DATA'; payload: { reports: CrmdReportType[] } };
// | { type: 'SET_FILTERS'; payload: { filters: CrmdFilters } }
// | { type: 'CLEAR_FILTER'; payload: { key: keyof CrmdFilters } }
// | { type: 'RESET_FILTERS' }
// | { type: 'SET_PAGE'; payload: { page: number } }
// | { type: 'SET_PAGE_SIZE'; payload: { pageSize: number } }
