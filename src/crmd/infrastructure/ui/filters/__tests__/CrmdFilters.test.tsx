import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CrmdDispatchContext, CrmdStateContext } from '@/src/crmd/application/CrmdContext';
import type { CrmdFiltersType } from '@/src/crmd/domain/CrmdFilters.ts';
import { CrmdFilters } from '@/src/crmd/infrastructure/ui/filters/CrmdFilters.tsx';

function renderWithProviders(filters: CrmdFiltersType, dispatch = vi.fn()) {
  return {
    dispatch,
    ...render(
      <CrmdDispatchContext.Provider value={dispatch}>
        <CrmdStateContext.Provider value={{ reports: [], filters }}>
          <CrmdFilters />
        </CrmdStateContext.Provider>
      </CrmdDispatchContext.Provider>
    ),
  };
}

describe('CrmdFilters', () => {
  it('Affiche le titre et les boutons', () => {
    renderWithProviders({});

    expect(
      screen.getByRole('heading', { level: 1, name: /Comptes-rendus matériels défectueux/i })
    ).toBeVisible();
    expect(screen.getByRole('button', { name: 'Valider' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Réinitialiser' })).toBeVisible();
  });

  it('Initialise les champs avec les filtres', () => {
    renderWithProviders({
      idPrm: '040969880001',
      typologieDEquipement: 'COMPTEUR',
      statutCrmd: 'TERMINE',
      resposableDefaillance: 'ACCORD',
    });

    expect(screen.getByLabelText('ID équipement')).toHaveValue('040969880001');
    expect(screen.getByLabelText("Typologie d'équipement")).toHaveValue('COMPTEUR');
    expect(screen.getByLabelText('Statut CRMD')).toHaveValue('TERMINE');
    expect(screen.getByLabelText('Responsable défaillance')).toHaveValue('ACCORD');
  });

  it('Dispatch SET_FILTERS avec les valeurs saisies au submit', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({}, dispatch);

    await user.type(screen.getByLabelText('ID équipement'), '040969880001');
    await user.selectOptions(screen.getByLabelText("Typologie d'équipement"), 'COMPTEUR');
    await user.selectOptions(screen.getByLabelText('Statut CRMD'), 'DIAGNOSTIC_EN_COURS');
    await user.selectOptions(screen.getByLabelText('Responsable défaillance'), 'AUCUNE');

    await user.click(screen.getByRole('button', { name: 'Valider' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_FILTERS',
      filters: {
        idPrm: '040969880001',
        typologieDEquipement: 'COMPTEUR',
        statutCrmd: 'DIAGNOSTIC_EN_COURS',
        resposableDefaillance: 'AUCUNE',
      },
    });
  });

  it('Dispatch RESET_FILTERS et vide les fields', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({}, dispatch);

    const idInput = screen.getByLabelText('ID équipement');
    await user.type(idInput, '040969880001');

    expect(idInput).toHaveValue('040969880001');

    await user.click(screen.getByRole('button', { name: 'Réinitialiser' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'RESET_FILTERS' });

    expect(screen.getByLabelText('ID équipement')).toHaveValue('');
    expect(screen.getByLabelText("Typologie d'équipement")).toHaveValue('');
    expect(screen.getByLabelText('Statut CRMD')).toHaveValue('');
    expect(screen.getByLabelText('Responsable défaillance')).toHaveValue('');
  });
});
