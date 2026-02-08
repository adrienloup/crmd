import { useContext } from 'react';
import { CrmdStateContext, CrmdDispatchContext } from '@/src/crmd/interface/CrmdContext.tsx';

export function useCrmdState() {
  const ctx = useContext(CrmdStateContext);
  if (!ctx) throw new Error('useCrmdState doit être utilisé dans CrmdProvider');
  return ctx;
}

export function useCrmdDispatch() {
  const ctx = useContext(CrmdDispatchContext);
  if (!ctx) throw new Error('useCrmdDispatch doit être utilisé dans CrmdProvider');
  return ctx;
}
