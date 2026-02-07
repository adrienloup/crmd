import { useEffect, useReducer } from 'react';
import { crmdReducer } from '@/src/crmd/state/CrmdReducer.ts';
import type { ChildrenType } from '@/src/shared/types/Children.ts';
import { CrmdContext, CrmdDispatchContext } from './CrmdContext';

export const CrmdProvider = ({ children }: { children: ChildrenType }) => {
  const [state, dispatch] = useReducer(crmdReducer, {
    reports: [],
    // filters: {},
    // page: 1,
    // pageSize: 10,
    isLoaded: false,
  });

  useEffect(() => {
    dispatch({ type: 'INIT_DATA', payload: { reports: state.reports } });
  }, []);

  return (
    <CrmdDispatchContext.Provider value={dispatch}>
      <CrmdContext.Provider value={state}>{children}</CrmdContext.Provider>
    </CrmdDispatchContext.Provider>
  );
};
