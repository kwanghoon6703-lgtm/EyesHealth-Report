# EyesHealth-Report

핸드폰이나 컴퓨터, 태블릿등을 열면 자동으로 눈동자를 스캔하여 질병에 관계되는 디지털값을 자동으로 저장하여 수시로 업데이트하여 변화를 디지털값으로 저장하여 일주일마다 고객에게 눈건강 리포트를 제공하는 앱서비스

Passive pupil scanning across phone / PC / tablet, continuously logging digital eye-health metrics and turning them into a weekly report for the user.

## App (mobile, Expo / React Native)

UI implementation of the mobile report experience, in Korean with English labels, "soft clinical" visual direction (warm off-white paper, generous space, editorial type, `#0E9488` accent, monospace numerals).

Screens:
- **Report overview / score** — weekly score gauge, status, contributing metrics list
- **Metric detail** — single metric deep-dive with 8-week trend and normal range
- **Trend over time** — score history chart + past weekly report list
- **Empty / first-run state** — no-data explainer before the first weekly report exists

### Run locally

```bash
npm install
npm run web    # or: npm run ios / npm run android (requires Expo Go or a simulator)
```

### Structure

```
App.tsx                 navigation + font loading
src/theme/               colors, typography, spacing tokens
src/types/                shared TypeScript types
src/data/mockData.ts      mock weekly reports + metric definitions
src/components/           ScoreGauge, MetricRow, TrendLineChart, StatusPill, Eyebrow, Screen
src/screens/               OverviewScreen, MetricDetailScreen, TrendScreen, EmptyStateScreen
```

Data is currently mocked in `src/data/mockData.ts` — there is no backend/scanning integration yet.
