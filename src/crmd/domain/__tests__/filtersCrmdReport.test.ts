import { describe, it, expect } from 'vitest';
import type { CrmdReportType } from '@/src/crmd/domain/CrmdReport.ts';
import { filterCrmdReports } from '@/src/crmd/domain/filtersCrmdReport';

const reports: CrmdReportType[] = [
  {
    idPrm: '040969880001',
    typologieDEquipement: 'COMPTEUR',
    dateDeCreation: '2026-02-06T10:15:00.000Z',
    statutCrmd: 'DIAGNOSTIC_EN_COURS',
    resposableDefaillance: 'AUCUNE',
  },
  {
    idPrm: '040969880002',
    typologieDEquipement: 'CONCENTRATEUR',
    dateDeCreation: '2026-02-05T08:00:00.000Z',
    statutCrmd: 'TERMINE',
    resposableDefaillance: 'ACCORD',
  },
  {
    idPrm: '040969880003',
    typologieDEquipement: 'COMPTEUR',
    dateDeCreation: '2026-02-01T12:00:00.000Z',
    statutCrmd: 'TERMINE',
    resposableDefaillance: 'REFUS',
  },
];

describe('filterCrmdReports', () => {
  it('Retourne [] si aucun report ne match', () => {
    const result = filterCrmdReports(reports, { idPrm: 'DOES_NOT_EXIST' });
    expect(result).toHaveLength(0);
  });

  it('Retourne tous les reports quand aucun filtre n’est défini', () => {
    const result = filterCrmdReports(reports, {});
    expect(result).toHaveLength(3);
    expect(result.map((r) => r.idPrm)).toEqual(['040969880001', '040969880002', '040969880003']);
  });

  it('Filtre par idPrm', () => {
    const result = filterCrmdReports(reports, { idPrm: '040969880001' });
    expect(result).toHaveLength(1);
    expect(result.map((r) => r.idPrm)).toEqual(['040969880001']);
  });

  it('Filtre par typologieDEquipement', () => {
    const result = filterCrmdReports(reports, { typologieDEquipement: 'COMPTEUR' });
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.typologieDEquipement === 'COMPTEUR')).toBe(true);
  });

  it('Filtre par statutCrmd', () => {
    const result = filterCrmdReports(reports, { statutCrmd: 'TERMINE' });
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.statutCrmd === 'TERMINE')).toBe(true);
  });

  it('Filtre par resposableDefaillance', () => {
    const result = filterCrmdReports(reports, { resposableDefaillance: 'AUCUNE' });
    expect(result).toHaveLength(1);
    expect(result.every((r) => r.resposableDefaillance === 'AUCUNE')).toBe(true);
  });

  it('Combine plusieurs filtres (AND)', () => {
    const result = filterCrmdReports(reports, {
      typologieDEquipement: 'COMPTEUR',
      statutCrmd: 'TERMINE',
    });
    expect(result).toHaveLength(1);
    expect(result[0].idPrm).toBe('040969880003');
  });
});
