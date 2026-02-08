import { useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import { CrmdChips } from '@/src/crmd/infrastructure/ui/chips/CrmdChips.tsx';
import { filterCrmdReports } from '@/src/crmd/infrastructure/ui/filters/filtersCrmdReport.ts';
import styles from '@/src/crmd/infrastructure/ui/results/CrmdResults.module.scss';

export const CrmdResults = () => {
  const { reports, filters } = useCrmdState();

  const total = filterCrmdReports(reports, filters).length;

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>
        {total} résultat{total > 1 ? 's' : ''}
      </h2>
      <CrmdChips />
    </section>
  );
};
