import { filterCrmdReports } from '@/src/crmd/domain/services/filtersCrmdReport.ts';
import { useCrmdDispatch, useCrmdState } from '@/src/crmd/interface/useCrmd.ts';
import styles from '@/src/crmd/ui/results/CrmdResults.module.scss';

export const CrmdResults = () => {
  const { reports, filters } = useCrmdState();
  const dispatch = useCrmdDispatch();

  const total = filterCrmdReports(reports, filters).length;

  const chips: Array<{ key: 'id'; label: string }> = [];

  if (filters.id) {
    chips.push({ key: 'id', label: filters.id });
  }

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>
        {total} résultat{total > 1 ? 's' : ''}
      </h2>
      {chips.length ? (
        <div>
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => dispatch({ type: 'CLEAR_FILTER', filter: chip.key })}
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
