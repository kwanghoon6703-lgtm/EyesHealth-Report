export type MetricStatus = 'good' | 'watch' | 'attention';

export type MetricId =
  | 'pupilReactivity'
  | 'blinkRate'
  | 'focusStability'
  | 'pupilSymmetry'
  | 'screenExposure';

export interface MetricDefinition {
  id: MetricId;
  labelKo: string;
  labelEn: string;
  unit: string;
  descriptionKo: string;
  normalRangeKo: string;
}

export interface MetricReading {
  id: MetricId;
  value: number;
  status: MetricStatus;
  deltaFromLastWeek: number;
}

export interface TrendPoint {
  weekOf: string; // ISO date, Monday of the week
  score: number;
}

export interface WeeklyReport {
  weekOf: string;
  weekLabelKo: string;
  score: number;
  scoreStatus: MetricStatus;
  scanCount: number;
  summaryKo: string;
  metrics: MetricReading[];
}
