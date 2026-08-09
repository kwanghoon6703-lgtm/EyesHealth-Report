import { MetricDefinition, TrendPoint, WeeklyReport } from '../types';

export const metricDefinitions: MetricDefinition[] = [
  {
    id: 'pupilReactivity',
    labelKo: '동공 반응성',
    labelEn: 'Pupil Reactivity',
    unit: 'ms',
    descriptionKo:
      '빛 자극에 대해 동공이 수축·이완하는 속도입니다. 반응이 느려지면 피로 누적이나 신경계 변화의 초기 신호일 수 있습니다.',
    normalRangeKo: '180–260ms',
  },
  {
    id: 'blinkRate',
    labelKo: '깜빡임 빈도',
    labelEn: 'Blink Rate',
    unit: '회/분',
    descriptionKo:
      '분당 눈 깜빡임 횟수입니다. 화면 집중 시간이 길어지면 빈도가 낮아지고 안구건조로 이어질 수 있습니다.',
    normalRangeKo: '15–20회/분',
  },
  {
    id: 'focusStability',
    labelKo: '초점 안정성',
    labelEn: 'Focus Stability',
    unit: '%',
    descriptionKo:
      '가까운 대상에 초점을 유지하는 능력의 안정도입니다. 낮은 안정성은 눈 피로 및 조절력 저하와 관련이 있습니다.',
    normalRangeKo: '85% 이상',
  },
  {
    id: 'pupilSymmetry',
    labelKo: '동공 대칭성',
    labelEn: 'Pupil Symmetry',
    unit: '%',
    descriptionKo:
      '양쪽 동공 크기 차이의 대칭 정도입니다. 큰 비대칭은 드물지만 주의 깊게 관찰이 필요한 지표입니다.',
    normalRangeKo: '95% 이상',
  },
  {
    id: 'screenExposure',
    labelKo: '스크린 노출 시간',
    labelEn: 'Screen Exposure',
    unit: '시간',
    descriptionKo: '하루 평균 화면을 응시한 누적 시간입니다. 다른 지표 변화의 배경 요인으로 함께 참고하세요.',
    normalRangeKo: '6시간 이하',
  },
];

export const weeklyReports: WeeklyReport[] = [
  {
    weekOf: '2026-08-03',
    weekLabelKo: '8월 1주차 · 8.3 – 8.9',
    score: 78,
    scoreStatus: 'watch',
    scanCount: 312,
    summaryKo: '전반적으로 양호하지만, 초점 안정성이 지난주보다 낮아졌어요. 화면 사용 중 짧은 휴식을 권장해요.',
    metrics: [
      { id: 'pupilReactivity', value: 214, status: 'good', deltaFromLastWeek: -3 },
      { id: 'blinkRate', value: 14, status: 'watch', deltaFromLastWeek: -2 },
      { id: 'focusStability', value: 79, status: 'watch', deltaFromLastWeek: -6 },
      { id: 'pupilSymmetry', value: 98, status: 'good', deltaFromLastWeek: 0 },
      { id: 'screenExposure', value: 7.2, status: 'watch', deltaFromLastWeek: 0.6 },
    ],
  },
  {
    weekOf: '2026-07-27',
    weekLabelKo: '7월 4주차 · 7.27 – 8.2',
    score: 84,
    scoreStatus: 'good',
    scanCount: 298,
    summaryKo: '모든 지표가 정상 범위 안에 있어요. 이 흐름을 유지해보세요.',
    metrics: [
      { id: 'pupilReactivity', value: 217, status: 'good', deltaFromLastWeek: 2 },
      { id: 'blinkRate', value: 16, status: 'good', deltaFromLastWeek: 1 },
      { id: 'focusStability', value: 85, status: 'good', deltaFromLastWeek: 3 },
      { id: 'pupilSymmetry', value: 98, status: 'good', deltaFromLastWeek: 0 },
      { id: 'screenExposure', value: 6.6, status: 'good', deltaFromLastWeek: -0.4 },
    ],
  },
  {
    weekOf: '2026-07-20',
    weekLabelKo: '7월 3주차 · 7.20 – 7.26',
    score: 81,
    scoreStatus: 'good',
    scanCount: 305,
    summaryKo: '안정적인 한 주였어요. 동공 반응성이 소폭 개선됐습니다.',
    metrics: [
      { id: 'pupilReactivity', value: 215, status: 'good', deltaFromLastWeek: 4 },
      { id: 'blinkRate', value: 15, status: 'good', deltaFromLastWeek: 0 },
      { id: 'focusStability', value: 82, status: 'good', deltaFromLastWeek: 1 },
      { id: 'pupilSymmetry', value: 97, status: 'good', deltaFromLastWeek: -1 },
      { id: 'screenExposure', value: 7.0, status: 'watch', deltaFromLastWeek: 0.2 },
    ],
  },
];

export const trendHistory: TrendPoint[] = [
  { weekOf: '2026-06-08', score: 74 },
  { weekOf: '2026-06-15', score: 76 },
  { weekOf: '2026-06-22', score: 73 },
  { weekOf: '2026-06-29', score: 79 },
  { weekOf: '2026-07-06', score: 80 },
  { weekOf: '2026-07-13', score: 77 },
  { weekOf: '2026-07-20', score: 81 },
  { weekOf: '2026-07-27', score: 84 },
  { weekOf: '2026-08-03', score: 78 },
];

export const currentReport = weeklyReports[0];
