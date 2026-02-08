import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CrmdStateContext } from '@/src/crmd/application/CrmdContext';
import { CrmdDispatchContext } from '@/src/crmd/application/CrmdContext';
import type { CrmdFiltersType } from '@/src/crmd/domain/CrmdFilters.ts';
import { CrmdChips } from '@/src/crmd/infrastructure/ui/chips/CrmdChips';

function renderWithProviders(filters: CrmdFiltersType, dispatch = vi.fn()) {
  return {
    dispatch,
    ...render(
      <CrmdDispatchContext.Provider value={dispatch}>
        <CrmdStateContext.Provider value={{ reports: [], filters }}>
          <CrmdChips />
        </CrmdStateContext.Provider>
      </CrmdDispatchContext.Provider>
    ),
  };
}

describe('CrmdChips', () => {
  it('Aucun chip afficher quand aucun filtre actif', () => {
    renderWithProviders({});

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('Affiche un chip pour idPrm avec le bon label', () => {
    renderWithProviders({ idPrm: '040969880001' });

    const btn = screen.getByRole('button', { name: 'Retirer le filtre 040969880001' }); // aria-label
    expect(btn).toBeVisible();
    expect(btn).toHaveTextContent('040969880001');
  });

  it('Affiche des chips pour les filtres avec les labels', () => {
    renderWithProviders({
      typologieDEquipement: 'COMPTEUR',
      statutCrmd: 'DIAGNOSTIC_EN_COURS',
      resposableDefaillance: 'AUCUNE',
    });

    expect(screen.getByRole('button', { name: 'Retirer le filtre Compteur' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Retirer le filtre Diagnostic en cours' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Retirer le filtre Aucune' })).toBeVisible();
  });

  it('dispatch CLEAR_FILTER avec le bon filter quand on clique sur un chip idPrm', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({ idPrm: '040969880001' }, dispatch);

    await user.click(screen.getByRole('button', { name: 'Retirer le filtre 040969880001' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'CLEAR_FILTER', filter: 'idPrm' });
  });

  it('dispatch CLEAR_FILTER avec le bon filter quand on clique sur un chip typologieDEquipement', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({ typologieDEquipement: 'COMPTEUR' }, dispatch);

    await user.click(screen.getByRole('button', { name: 'Retirer le filtre Compteur' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'CLEAR_FILTER', filter: 'typologieDEquipement' });
  });

  it('dispatch CLEAR_FILTER avec le bon filter quand on clique sur un chip statutCrmd', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({ statutCrmd: 'TERMINE' }, dispatch);

    await user.click(screen.getByRole('button', { name: 'Retirer le filtre Terminé' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'CLEAR_FILTER', filter: 'statutCrmd' });
  });

  it('dispatch CLEAR_FILTER avec le bon filter quand on clique sur un chip resposableDefaillance', async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    renderWithProviders({ resposableDefaillance: 'REFUS' }, dispatch);

    await user.click(screen.getByRole('button', { name: 'Retirer le filtre Refus' }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'CLEAR_FILTER', filter: 'resposableDefaillance' });
  });
});
