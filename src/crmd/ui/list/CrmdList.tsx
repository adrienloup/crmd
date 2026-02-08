import { useMemo } from 'react';
import { filterCrmdReports } from '@/src/crmd/domain/services/filtersCrmdReport.ts';
import { useCrmdState } from '@/src/crmd/interface/useCrmd.ts';
import styles from '@/src/crmd/ui/list/CrmdList.module.scss';

export const CrmdList = () => {
  const { reports, filters } = useCrmdState();

  const filteredReports = useMemo(() => {
    return filterCrmdReports(reports, filters);
  }, [reports, filters]);

  return (
    <section className={styles.list}>
      {reports.length ? (
        <table aria-label="Liste des comptes-rendus matériels défectueux">
          <thead>
            <tr>
              <th>ID équipement</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
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
