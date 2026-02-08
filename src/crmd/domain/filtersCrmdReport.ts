import type { CrmdFiltersType } from '@/src/crmd/domain/CrmdFilters.ts';
import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';

export function filterCrmdReports(reports: CrmdReportType[], filters: CrmdFiltersType) {
  return reports.filter((report) => {
    if (filters.idPrm && !report.idPrm.includes(filters.idPrm)) return false;
    if (filters.typologieDEquipement && filters.typologieDEquipement !== report.typologieDEquipement)
      return false;
    if (filters.statutCrmd && filters.statutCrmd !== report.statutCrmd) return false;
    if (filters.resposableDefaillance && filters.resposableDefaillance !== report.resposableDefaillance)
      return false;
    return true;
  });
}
