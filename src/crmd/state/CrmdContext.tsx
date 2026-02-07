import { createContext, type Dispatch } from 'react';
import type { CrmdDispatchType, CrmdType } from '@/src/crmd/domain/Crmd.ts';

export const CrmdContext = createContext<CrmdType | undefined>(undefined);
export const CrmdDispatchContext = createContext<Dispatch<CrmdDispatchType> | undefined>(undefined);
