export type TypologieDEquipementType = 'COMPTEUR' | 'CONCENTRATEUR';
export type StatutCrmdType = 'DIAGNOSTIC_EN_COURS' | 'TERMINE';
export type ResposableDefaillanceType = 'AUCUNE' | 'ACCORD' | 'REFUS';

export interface CrmdReportType {
  idPrm: string;
  typologieDEquipement: TypologieDEquipementType;
  dateDeCreation: string;
  statutCrmd: StatutCrmdType;
  resposableDefaillance: ResposableDefaillanceType;
}
