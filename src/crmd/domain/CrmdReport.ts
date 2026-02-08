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

export const typologieDEquipementLabel: Record<TypologieDEquipementType, string> = {
  COMPTEUR: 'Compteur',
  CONCENTRATEUR: 'Concentrateur',
};

export const statutCrmdLabel: Record<StatutCrmdType, string> = {
  DIAGNOSTIC_EN_COURS: 'Diagnostic en cours',
  TERMINE: 'Terminé',
};

export const resposableDefaillanceLabel: Record<ResposableDefaillanceType, string> = {
  AUCUNE: 'Aucune',
  ACCORD: 'Accord',
  REFUS: 'Refus',
};
