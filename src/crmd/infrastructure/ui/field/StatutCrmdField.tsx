import { useState } from 'react';
import styles from '@/src/crmd/infrastructure/ui/field/Field.module.scss';

interface StatutCrmdFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const StatutCrmdField = ({ initialValue, onChange }: StatutCrmdFieldProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.field}>
      <label htmlFor="statutCrmd">Statut CRMD</label>
      <select
        id="statutCrmd"
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          onChange(v);
        }}
      >
        <option value="">Sélectionner un statut</option>
        <option value="DIAGNOSTIC_EN_COURS">Diagnostic en cours</option>
        <option value="TERMINE">Terminé</option>
      </select>
    </div>
  );
};
