import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Eyebrow } from '../components/Eyebrow';
import { ScoreGauge } from '../components/ScoreGauge';
import { StatusPill } from '../components/StatusPill';
import { MetricRow } from '../components/MetricRow';
import { currentReport, metricDefinitions } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Overview'>;

export function OverviewScreen({ navigation, route }: Props) {
  const report = route.params?.report ?? currentReport;

  return (
    <Screen>
      <Eyebrow labelEn="Weekly Report" />
      <Text style={styles.title}>이번 주 눈건강 리포트</Text>
      <Text style={styles.dateRange}>{report.weekLabelKo}</Text>

      <View style={styles.gaugeCard}>
        <ScoreGauge score={report.score} />
        <StatusPill status={report.scoreStatus} />
        <Text style={styles.summary}>{report.summaryKo}</Text>
        <Text style={styles.scanCount}>
          이번 주 <Text style={styles.scanCountMono}>{report.scanCount}</Text>회 스캔됨
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Eyebrow labelEn="Metrics" />
        <Text style={styles.sectionTitle}>세부 지표</Text>
      </View>

      {report.metrics.map((reading) => {
        const def = metricDefinitions.find((d) => d.id === reading.id)!;
        return (
          <MetricRow
            key={reading.id}
            definition={def}
            reading={reading}
            onPress={() => navigation.navigate('MetricDetail', { metricId: reading.id, report })}
          />
        );
      })}

      <Pressable style={styles.trendLink} onPress={() => navigation.navigate('Trend')}>
        <Text style={styles.trendLinkText}>지난 추이 전체보기</Text>
        <Text style={styles.trendLinkArrow}>→</Text>
      </Pressable>

      <Pressable style={styles.emptyLink} onPress={() => navigation.navigate('EmptyState')}>
        <Text style={styles.emptyLinkText}>첫 리포트 전 화면 미리보기</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.display,
    fontSize: 28,
    color: colors.ink,
    marginBottom: 4,
  },
  dateRange: {
    fontFamily: typography.monoRegular,
    fontSize: 13,
    color: colors.inkSoft,
    marginBottom: spacing.lg,
  },
  gaugeCard: {
    alignItems: 'center',
    backgroundColor: colors.paperRaised,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.paperLine,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.sm,
  },
  summary: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: colors.inkSoft,
    marginTop: spacing.sm,
  },
  scanCount: {
    fontSize: 12,
    color: colors.inkFaint,
    marginTop: spacing.xs,
  },
  scanCountMono: {
    fontFamily: typography.mono,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontFamily: typography.display,
    fontSize: 20,
    color: colors.ink,
  },
  trendLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    marginTop: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.accentSoft,
  },
  trendLinkText: {
    color: colors.accentStrong,
    fontWeight: '600',
    fontSize: 15,
  },
  trendLinkArrow: {
    color: colors.accentStrong,
    fontSize: 15,
  },
  emptyLink: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  emptyLinkText: {
    color: colors.inkFaint,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
