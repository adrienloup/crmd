import type {
  ResposableDefaillanceType,
  StatutCrmdType,
  TypologieDEquipementType,
} from '@/src/crmd/domain/CrmdReport.ts';

export interface CrmdFiltersType {
  idPrm?: string;
  typologieDEquipement?: TypologieDEquipementType;
  statutCrmd?: StatutCrmdType;
  resposableDefaillance?: ResposableDefaillanceType;
}
