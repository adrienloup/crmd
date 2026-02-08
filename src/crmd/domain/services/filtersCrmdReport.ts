import type { CrmdFiltersType } from '@/src/crmd/domain/model/CrmdFilters.ts';
import type { CrmdReportType } from '@/src/crmd/domain/model/CrmdReport.ts';

export function filterCrmdReports(reports: CrmdReportType[], filters: CrmdFiltersType) {
  return reports.filter((report) => {
    if (filters.id && !report.id.includes(filters.id)) return false;
    // if (filters.typologie && report.typologie !== filters.typologie) return false;
    // if (filters.statut && report.statut !== filters.statut) return false;
    return true;
  });
}
