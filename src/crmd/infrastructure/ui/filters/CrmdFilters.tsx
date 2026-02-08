import { useState } from 'react';
import { useCrmdState, useCrmdDispatch } from '@/src/crmd/application/useCrmd.ts';
import type { TypologieDEquipementType } from '@/src/crmd/domain/CrmdReport.ts';
import { IdPrmField } from '@/src/crmd/infrastructure/ui/field/IdPrmField.tsx';
import { TypologieDEquipementField } from '@/src/crmd/infrastructure/ui/field/TypologieDEquipementField.tsx';
import type { CrmdFiltersType } from '@/src/crmd/infrastructure/ui/filters/CrmdFilters.ts';
import styles from '@/src/crmd/infrastructure/ui/filters/CrmdFilters.module.scss';

export const CrmdFilters = () => {
  const state = useCrmdState();
  const dispatch = useCrmdDispatch();
  const [version, setVersion] = useState(0);
  const [filters, setFilters] = useState<CrmdFiltersType>(state.filters);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch({ type: 'SET_FILTERS', filters });
  };

  const onReset = () => {
    setFilters({});
    setVersion((v) => v + 1);
    dispatch({ type: 'RESET_FILTERS' });
  };

  const idPrmKey = state.filters.idPrm ?? `idPrm-${version}`;
  const typologieDEquipementKey = state.filters.typologieDEquipement ?? `typologieDEquipement-${version}`;

  return (
    <section className={styles.filters}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <h1 className={styles.title}>Comptes-rendus matériels défectueux</h1>
        <div className={styles.inside}>
          <IdPrmField
            key={idPrmKey}
            initialValue={state.filters.idPrm ?? ''}
            onChange={(value) => setFilters((prev) => ({ ...prev, idPrm: value || undefined }))}
          />
          <TypologieDEquipementField
            key={typologieDEquipementKey}
            initialValue={state.filters.typologieDEquipement ?? ''}
            onChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                typologieDEquipement: (value || undefined) as TypologieDEquipementType | undefined,
              }))
            }
          />
          <div className={styles.field}>2</div>
        </div>
        <div className={styles.buttons}>
          <button type="submit">Valider</button>
          <button
            type="button"
            onClick={onReset}
          >
            Réinitialiser
          </button>
        </div>
      </form>
    </section>
  );
};
