import { useState } from 'react';
import styles from '@/src/crmd/infrastructure/ui/field/Field.module.scss';

interface IdPrmFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const IdPrmField = ({ initialValue, onChange }: IdPrmFieldProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.field}>
      <label htmlFor="idPrm">ID équipement</label>
      <input
        id="idPrm"
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
};
