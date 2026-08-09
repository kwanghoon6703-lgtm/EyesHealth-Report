import { MetricId, WeeklyReport } from '../types';

export type RootStackParamList = {
  Overview: { report?: WeeklyReport } | undefined;
  MetricDetail: { metricId: MetricId; report?: WeeklyReport };
  Trend: undefined;
  EmptyState: undefined;
};
