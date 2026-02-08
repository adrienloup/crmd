import type { CrmdDispatchType, CrmdStateType } from '@/src/crmd/domain/model/Crmd.ts';

/*
  Reducer plus simple.
  1. Le reducer ne fait pas de logique métier.
  Il se contente de stocker que l’état des filtres.
  2. Meilleure testabilité.
  Tester le reducer devient trivial (tester juste que filters est stocké/vidé).
*/

export const crmdReducer = (state: CrmdStateType, action: CrmdDispatchType): CrmdStateType => {
  switch (action.type) {
    case 'INIT_DATA':
      return { ...state, reports: action.reports };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.filters,
      };
    case 'CLEAR_FILTER': {
      const filters = { ...state.filters };
      delete filters[action.filter];
      return { ...state, filters: filters };
    }
    case 'RESET_FILTERS':
      return { ...state, filters: {} };
    default:
      return state;
  }
};
