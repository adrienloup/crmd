import { useCrmdDispatch, useCrmdState } from '@/src/crmd/application/useCrmd.ts';
import {
  resposableDefaillanceLabel,
  statutCrmdLabel,
  typologieDEquipementLabel,
} from '@/src/crmd/domain/CrmdReport.ts';
import styles from '@/src/crmd/infrastructure/ui/chips/CrmdChips.module.scss';

export const CrmdChips = () => {
  const { filters } = useCrmdState();
  const dispatch = useCrmdDispatch();

  const chips: Array<{
    filter: 'idPrm' | 'typologieDEquipement' | 'statutCrmd' | 'resposableDefaillance';
    label: string;
  }> = [];

  if (filters.idPrm) {
    chips.push({ filter: 'idPrm', label: filters.idPrm });
  }
  if (filters.typologieDEquipement) {
    chips.push({
      filter: 'typologieDEquipement',
      label: typologieDEquipementLabel[filters.typologieDEquipement],
    });
  }
  if (filters.statutCrmd) {
    chips.push({ filter: 'statutCrmd', label: statutCrmdLabel[filters.statutCrmd] });
  }
  if (filters.resposableDefaillance) {
    chips.push({
      filter: 'resposableDefaillance',
      label: resposableDefaillanceLabel[filters.resposableDefaillance],
    });
  }

  return chips.length ? (
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
  ) : null;
};
