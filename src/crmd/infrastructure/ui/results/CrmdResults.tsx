import { useMemo } from 'react';
import { useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import { filterCrmdReports } from '@/src/crmd/domain/filtersCrmdReport.ts';
import { CrmdChips } from '@/src/crmd/infrastructure/ui/chips/CrmdChips.tsx';
import styles from '@/src/crmd/infrastructure/ui/results/CrmdResults.module.scss';

export const CrmdResults = () => {
  const { reports, filters } = useCrmdState();
  const total = useMemo(() => filterCrmdReports(reports, filters).length, [reports, filters]);

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>
        {total} résultat{total > 1 ? 's' : ''}
      </h2>
      <CrmdChips />
    </section>
  );
};
