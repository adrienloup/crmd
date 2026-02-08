import { useState } from 'react';
import styles from '@/src/crmd/infrastructure/ui/field/Field.module.scss';

interface TypologieDEquipementFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const TypologieDEquipementField = ({ initialValue, onChange }: TypologieDEquipementFieldProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.field}>
      <label htmlFor="typologieDEquipement">Typologie d'équipement</label>
      <select
        id="typologieDEquipement"
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          onChange(v);
        }}
      >
        <option value="">Sélectionner une typologie</option>
        <option value="COMPTEUR">Compteur</option>
        <option value="CONCENTRATEUR">Concentrateur</option>
      </select>
    </div>
  );
};
