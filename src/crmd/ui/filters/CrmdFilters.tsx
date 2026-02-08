import { useState } from 'react';
import type { CrmdFiltersType } from '@/src/crmd/domain/model/CrmdFilters.ts';
import { useCrmdState, useCrmdDispatch } from '@/src/crmd/interface/useCrmd.ts';
import styles from '@/src/crmd/ui/filters/CrmdFilters.module.scss';

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

  const idKey = state.filters.id ?? `reset-${version}`;

  return (
    <section className={styles.filters}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <h1 className={styles.title}>Comptes-rendus matériels défectueux</h1>
        <div className={styles.inside}>
          <IdField
            key={idKey}
            initialValue={state.filters.id ?? ''}
            onChange={(value) => setFilters((prev) => ({ ...prev, id: value || undefined }))}
          />
          <div className={styles.filter}>2</div>
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

function IdField({ initialValue, onChange }: { initialValue: string; onChange: (value: string) => void }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.filter}>
      <label htmlFor="id">ID équipement</label>
      <input
        id="id"
        type="text"
        placeholder="Ex: 00000000000001"
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          onChange(v);
        }}
      />
    </div>
  );
}
