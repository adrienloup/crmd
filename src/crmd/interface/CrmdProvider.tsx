import { useEffect, useReducer } from 'react';
import { crmdReducer } from '@/src/crmd/interface/CrmdReducer.ts';
import { reports } from '@/src/crmd/repository/CrmdRepository.ts';
import type { ChildrenType } from '@/src/shared/types/Children.ts';
import { CrmdStateContext, CrmdDispatchContext } from './CrmdContext';

/*
  Séparer StateProvider et DispatchProvider.
  1. Moins de re-renders.
  Le state change souvent (filters, reports), tous les composants qui lisent CrmdStateContext re-render.
  Le dispatch est la même référence tant que le provider vit), les composants qui n’utilisent que dispatch
  n’ont pas besoin de re-render quand le state change.
  2. Séparation des responsabilités (plus lisible).
  const { reports, filters } = useCrmdState()
  const dispatch = useCrmdDispatch()
  3. Moins de if (!ctx), moins de ctx.state, et des tests plus simples.
  useCrmdState() → retourne un CrmdStateType
  useCrmdDispatch() → retourne un Dispatch<CrmdDispatchType>
*/

export const CrmdProvider = ({ children }: { children: ChildrenType }) => {
  const [state, dispatch] = useReducer(crmdReducer, {
    reports: reports,
    filters: {},
  });

  useEffect(() => {
    dispatch({ type: 'INIT_DATA', reports: state.reports });
  }, []);

  return (
    <CrmdDispatchContext.Provider value={dispatch}>
      <CrmdStateContext.Provider value={state}>{children}</CrmdStateContext.Provider>
    </CrmdDispatchContext.Provider>
  );
};
