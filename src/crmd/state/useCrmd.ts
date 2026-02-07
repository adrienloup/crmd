import { useContext } from 'react';
import { CrmdContext, CrmdDispatchContext } from '@/src/crmd/state/CrmdContext.tsx';

export function useCrmd() {
  const ctx = useContext(CrmdContext);
  if (!ctx) throw new Error('useCrmd doit être utilisé dans CrmdProvider');
  return ctx;
}

export function useCrmdDispatch() {
  const ctx = useContext(CrmdDispatchContext);
  if (!ctx) throw new Error('useCrmdDispatch doit être utilisé dans CrmdDispatchProvider');
  return ctx;
}
