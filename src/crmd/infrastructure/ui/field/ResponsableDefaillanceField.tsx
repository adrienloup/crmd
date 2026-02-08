import { useState } from 'react';
import styles from '@/src/crmd/infrastructure/ui/field/Field.module.scss';

interface ResponsableDefaillanceFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const ResponsableDefaillanceField = ({ initialValue, onChange }: ResponsableDefaillanceFieldProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.field}>
      <label htmlFor="resposableDefaillanceKey">Responsable défaillance</label>
      <select
        id="resposableDefaillanceKey"
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          onChange(v);
        }}
      >
        <option value="">Sélectionner un responsable</option>
        <option value="AUCUNE">Aucune</option>
        <option value="ACCORD">Accord</option>
        <option value="REFUS">Refus</option>
      </select>
    </div>
  );
};
