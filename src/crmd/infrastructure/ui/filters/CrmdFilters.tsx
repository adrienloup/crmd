import { useState } from 'react';
import { useCrmdState, useCrmdDispatch } from '@/src/crmd/application/useCrmd.ts';
import type {
  ResposableDefaillanceType,
  StatutCrmdType,
  TypologieDEquipementType,
} from '@/src/crmd/domain/CrmdReport.ts';
import { IdPrmField } from '@/src/crmd/infrastructure/ui/field/IdPrmField.tsx';
import { ResponsableDefaillanceField } from '@/src/crmd/infrastructure/ui/field/ResponsableDefaillanceField.tsx';
import { StatutCrmdField } from '@/src/crmd/infrastructure/ui/field/StatutCrmdField.tsx';
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
  const statutCrmdKey = state.filters.statutCrmd ?? `statutCrmd-${version}`;
  const resposableDefaillanceKey = state.filters.resposableDefaillance ?? `resposableDefaillance-${version}`;

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
          <StatutCrmdField
            key={statutCrmdKey}
            initialValue={state.filters.statutCrmd ?? ''}
            onChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                statutCrmd: (value || undefined) as StatutCrmdType | undefined,
              }))
            }
          />
          <ResponsableDefaillanceField
            key={resposableDefaillanceKey}
            initialValue={state.filters.resposableDefaillance ?? ''}
            onChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                resposableDefaillance: (value || undefined) as ResposableDefaillanceType | undefined,
              }))
            }
          />
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
