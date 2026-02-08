import { useMemo } from 'react';
import { useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import { filterCrmdReports } from '@/src/crmd/infrastructure/ui/filters/filtersCrmdReport.ts';
import styles from '@/src/crmd/infrastructure/ui/list/CrmdList.module.scss';

export const CrmdList = () => {
  const { reports, filters } = useCrmdState();

  const filteredReports = useMemo(() => {
    return filterCrmdReports(reports, filters);
  }, [reports, filters]);

  return (
    <section className={styles.list}>
      {filteredReports.length ? (
        <table aria-label="Liste des comptes-rendus matériels défectueux">
          <thead>
            <tr>
              <th>ID équipement</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.idPrm}>
                <td>{report.idPrm}</td>
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
