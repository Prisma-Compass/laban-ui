// @laban/ui — PRISMA Design Tokens
// Source: F:\Huong Nghiep\Life-OS\00.Branding\Cẩm nang Thương hiệu PRISMA.md

export const PRISMA_COLORS = {
  // Base
  deepSpace: '#090A0F',
  deepSpaceLight: '#111318',
  white: '#FFFFFF',

  // RIASEC (Rainbow Spectrum)
  realistic: '#FF0055',
  investigative: '#FF6A00',
  artistic: '#FFD800',
  social: '#00FF66',
  enterprising: '#00FFFF',
  conventional: '#9900FF',

  // RIASEC secondary
  enterprisingAlt: '#0088FF',

  // Glass
  glassFill: 'rgba(9, 10, 15, 0.65)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassHoverBorder: 'rgba(255, 255, 255, 0.15)',
  glassGlow: 'rgba(0, 255, 255, 0.05)',
  glassHoverGlow: 'rgba(153, 0, 255, 0.15)',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.65)',
  textTertiary: 'rgba(255, 255, 255, 0.35)',

  // Guardians (Mascot accent colors)
  kaleid: '#FF6A00',
  sophos: '#00FFFF',
  matrixor: '#9900FF',
  lumen: '#FF0055',

  // Data Nature
  dataObserved: '#047857',
  dataSurvey: '#1d4ed8',
  dataCagr: '#7c2d12',
  dataDerived: '#b45309',
  dataProxy: '#dc2626',
  dataPppAdjusted: '#be185d',
  dataCrosswalk: '#0f766e',
  dataTaxonomy: '#4338ca',
  dataJaccard: '#0891b2',
  dataEmbedding: '#8b5cf6',
  dataHeuristic: '#991b1b',
  dataUnavailable: '#9ca3af',
} as const;

export const RIASEC_COLORS: Record<string, string> = {
  R: PRISMA_COLORS.realistic,
  I: PRISMA_COLORS.investigative,
  A: PRISMA_COLORS.artistic,
  S: PRISMA_COLORS.social,
  E: PRISMA_COLORS.enterprising,
  C: PRISMA_COLORS.conventional,
};

export const GLASS_STYLE = {
  background: 'rgba(9, 10, 15, 0.65)',
  backdropFilter: 'blur(25px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.05)',
} as const;

export const GUARDIAN_COLORS: Record<string, string> = {
  compass: PRISMA_COLORS.kaleid,
  beacon: PRISMA_COLORS.sophos,
  matrix: PRISMA_COLORS.matrixor,
  lifeos: PRISMA_COLORS.lumen,
} as const;
