// Soft clinical: warm off-white paper, generous space, editorial type.
// Accent teal for status/emphasis; monospace reserved for numeric readouts.

export const colors = {
  paper: '#FAF7F1',
  paperRaised: '#FFFFFF',
  paperLine: '#E9E2D6',

  ink: '#26302E',
  inkSoft: '#5B655F',
  inkFaint: '#9AA39C',

  accent: '#0E9488',
  accentSoft: '#E4F1EE',
  accentStrong: '#0B756C',

  warn: '#B9762E',
  warnSoft: '#F5EADA',
  good: '#2F8F5B',

  overlay: 'rgba(38, 48, 46, 0.06)',
} as const;

export const typography = {
  display: 'NotoSerifKR_600SemiBold',
  displayRegular: 'NotoSerifKR_400Regular',
  ui: undefined, // system sans (San Francisco / Roboto) — left undefined intentionally
  uiMedium: undefined,
  mono: 'JetBrainsMono_500Medium',
  monoRegular: 'JetBrainsMono_400Regular',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;
