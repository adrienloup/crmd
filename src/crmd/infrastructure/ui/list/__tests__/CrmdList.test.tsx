import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CrmdStateContext } from '@/src/crmd/application/CrmdContext';
import type { CrmdFiltersType } from '@/src/crmd/domain/CrmdFilters.ts';
import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';
import { CrmdList } from '@/src/crmd/infrastructure/ui/list/CrmdList.tsx';

const reports: CrmdReportType[] = [
  {
    idPrm: '040969880001',
    typologieDEquipement: 'COMPTEUR',
    dateDeCreation: '2026-02-06T10:15:00.000Z',
    statutCrmd: 'DIAGNOSTIC_EN_COURS',
    resposableDefaillance: 'AUCUNE',
  },
];

const filters: CrmdFiltersType = {
  idPrm: '040969880001',
};

describe('CrmdList', () => {
  it('Affiche "Aucune donnée" quand la liste filtrée est vide', () => {
    render(
      <CrmdStateContext.Provider
        value={{
          reports: [],
          filters: {},
        }}
      >
        <CrmdList />
      </CrmdStateContext.Provider>
    );

    expect(screen.getByText('Aucune donnée')).toBeVisible();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('Affiche le tableau quand la liste filtrée contient des éléments', () => {
    render(
      <CrmdStateContext.Provider
        value={{
          reports,
          filters: {},
        }}
      >
        <CrmdList />
      </CrmdStateContext.Provider>
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const columnheader = within(table) // th
      .getAllByRole('columnheader')
      .map((c) => c.textContent);
    expect(columnheader).toEqual([
      'ID équipement',
      'Typ. équip.',
      'Date de création',
      'Statut CRMD',
      'Res. déf.',
    ]);

    expect(within(table).getByText('040969880001')).toBeVisible();
    expect(within(table).getByText('Compteur')).toBeVisible();
    expect(within(table).getByText('06/02/2026 11:15')).toBeVisible();
    expect(within(table).getByText('Diagnostic en cours')).toBeVisible();
    expect(within(table).getByText('Aucune')).toBeVisible();
  });

  it('Affiche autant de lignes que d’éléments filtrés', () => {
    render(
      <CrmdStateContext.Provider
        value={{
          reports,
          filters,
        }}
      >
        <CrmdList />
      </CrmdStateContext.Provider>
    );

    const rows = within(screen.getByRole('table')).getAllByRole('row');
    expect(rows.length).toBe(1 + reports.length); // rows inclut les tr dans theader tr + tbody
  });
});
