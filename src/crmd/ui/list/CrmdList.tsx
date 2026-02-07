import { useCrmd } from '@/src/crmd/state/useCrmd.ts';
import styles from '@/src/crmd/ui/list/CrmdList.module.scss';

export const CrmdList = () => {
  const crmd = useCrmd();
  console.log('log>reports>', crmd);

  return crmd.reports?.length ? (
    <div className={styles.list}>
      <table aria-label="Liste des comptes-rendus matériels défectueux">
        <thead>
          <tr>
            <th>Numéro de série</th>
            <th>Typologie</th>
            <th>Date de création</th>
            <th>Statut CRMD</th>
            <th>Réponse</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  ) : (
    <div>Aucune donnée</div>
  );
};
