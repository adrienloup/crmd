import { useMemo } from 'react';
import { useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import {
  resposableDefaillanceLabel,
  statutCrmdLabel,
  typologieDEquipementLabel,
} from '@/src/crmd/domain/CrmdReport.ts';
import { filterCrmdReports } from '@/src/crmd/domain/filtersCrmdReport.ts';
import { formatDate } from '@/src/shared/utils/formatDate.ts';
import styles from '@/src/crmd/infrastructure/ui/list/CrmdList.module.scss';

export const CrmdList = () => {
  const { reports, filters } = useCrmdState();

  const filteredReports = useMemo(() => {
    return filterCrmdReports(reports, filters);
  }, [reports, filters]);

  return (
    <section className={styles.list}>
      {filteredReports?.length ? (
        <table aria-label="Liste des comptes-rendus matériels défectueux">
          <thead>
            <tr>
              <th>ID équipement</th>
              <th>Typ. équip.</th>
              <th>Date de création</th>
              <th>Statut CRMD</th>
              <th>Res. déf.</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.idPrm}>
                <td>{report.idPrm}</td>
                <td>{typologieDEquipementLabel[report.typologieDEquipement]}</td>
                <td>{formatDate(report.dateDeCreation)}</td>
                <td>{statutCrmdLabel[report.statutCrmd]}</td>
                <td>{resposableDefaillanceLabel[report.resposableDefaillance]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Aucune donnée</div>
      )}
    </section>
  );
};
