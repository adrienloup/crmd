import { useCrmdDispatch, useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import { filterCrmdReports } from '@/src/crmd/infrastructure/ui/filters/filtersCrmdReport.ts';
import styles from '@/src/crmd/infrastructure/ui/results/CrmdResults.module.scss';

export const CrmdResults = () => {
  const { reports, filters } = useCrmdState();
  const dispatch = useCrmdDispatch();

  const total = filterCrmdReports(reports, filters).length;

  const chips: Array<{ filter: 'idPrm' | 'typologieDEquipement' | 'statutCrmd'; label: string }> = [];

  if (filters.idPrm) {
    chips.push({ filter: 'idPrm', label: filters.idPrm });
  }
  if (filters.typologieDEquipement) {
    chips.push({ filter: 'typologieDEquipement', label: filters.typologieDEquipement });
  }
  if (filters.statutCrmd) {
    chips.push({ filter: 'statutCrmd', label: filters.statutCrmd });
  }

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>
        {total} résultat{total > 1 ? 's' : ''}
      </h2>
      {chips.length ? (
        <div className={styles.chips}>
          {chips.map((chip) => (
            <button
              key={chip.filter}
              className={styles.chip}
              type="button"
              onClick={() => dispatch({ type: 'CLEAR_FILTER', filter: chip.filter })}
              aria-label={`Retirer le filtre ${chip.label}`}
            >
              {chip.label} ✕
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
};
