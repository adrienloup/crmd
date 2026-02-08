import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CrmdDispatchContext, CrmdStateContext } from '@/src/crmd/application/CrmdContext';
import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';
import { CrmdResults } from '@/src/crmd/infrastructure/ui/results/CrmdResults.tsx';

const reports: CrmdReportType[] = [
  {
    idPrm: '040969880001',
    typologieDEquipement: 'COMPTEUR',
    dateDeCreation: '2026-02-06T10:15:00.000Z',
    statutCrmd: 'DIAGNOSTIC_EN_COURS',
    resposableDefaillance: 'AUCUNE',
  },
  {
    idPrm: '040969880002',
    typologieDEquipement: 'CONCENTRATEUR',
    dateDeCreation: '2026-02-05T08:00:00.000Z',
    statutCrmd: 'TERMINE',
    resposableDefaillance: 'ACCORD',
  },
];

describe('CrmdResults', () => {
  it('Affiche "0 résultat"', () => {
    render(
      <CrmdDispatchContext.Provider value={() => {}}>
        <CrmdStateContext.Provider value={{ reports, filters: { idPrm: '040969880003' } }}>
          <CrmdResults />
        </CrmdStateContext.Provider>
      </CrmdDispatchContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 2, name: '0 résultat' })).toBeVisible();
  });

  it('Affiche "2 résultats"', () => {
    render(
      <CrmdDispatchContext.Provider value={() => {}}>
        <CrmdStateContext.Provider value={{ reports, filters: {} }}>
          <CrmdResults />
        </CrmdStateContext.Provider>
      </CrmdDispatchContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 2, name: '2 résultats' })).toBeVisible();
  });
});
