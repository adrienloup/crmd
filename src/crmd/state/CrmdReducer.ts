import type { CrmdDispatchType, CrmdType } from '@/src/crmd/domain/Crmd.ts';

export const crmdReducer = (state: CrmdType, action: CrmdDispatchType): CrmdType => {
  switch (action.type) {
    case 'INIT_DATA':
      return { ...state, reports: action.payload.reports, isLoaded: true };
    default:
      return state;
  }
};
