import { createContext, type Dispatch } from 'react';
import type { CrmdDispatchType, CrmdStateType } from '@/src/crmd/domain/model/Crmd.ts';

export const CrmdStateContext = createContext<CrmdStateType | undefined>(undefined);
export const CrmdDispatchContext = createContext<Dispatch<CrmdDispatchType> | undefined>(undefined);
