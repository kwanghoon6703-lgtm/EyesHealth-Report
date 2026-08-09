import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Eyebrow } from '../components/Eyebrow';
import { StatusPill } from '../components/StatusPill';
import { TrendLineChart } from '../components/TrendLineChart';
import { currentReport, metricDefinitions, weeklyReports } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MetricDetail'>;

const screenWidth = Dimensions.get('window').width;

export function MetricDetailScreen({ route }: Props) {
  const { metricId } = route.params;
  const report = route.params.report ?? currentReport;
  const definition = metricDefinitions.find((d) => d.id === metricId)!;
  const reading = report.metrics.find((m) => m.id === metricId)!;

  const history = [...weeklyReports]
    .reverse()
    .map((r) => ({
      weekOf: r.weekOf,
      score: r.metrics.find((m) => m.id === metricId)?.value ?? 0,
    }));

  const deltaSign = reading.deltaFromLastWeek > 0 ? '+' : '';

  return (
    <Screen>
      <Eyebrow labelEn={definition.labelEn} />
      <Text style={styles.title}>{definition.labelKo}</Text>
      <Text style={styles.subtitle}>{definition.labelEn.toUpperCase()}</Text>

      <View style={styles.valueCard}>
        <Text style={styles.value}>
          {reading.value}
          <Text style={styles.unit}> {definition.unit}</Text>
        </Text>
        <View style={styles.valueMeta}>
          <StatusPill status={reading.status} />
          <Text style={styles.delta}>
            {reading.deltaFromLastWeek === 0
              ? '지난주와 동일'
              : `${deltaSign}${reading.deltaFromLastWeek}${definition.unit} · 지난주 대비`}
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Eyebrow labelEn="8-Week Trend" />
        <TrendLineChart points={history} width={screenWidth - spacing.lg * 2 - spacing.lg * 2} />
      </View>

      <View style={styles.card}>
        <Eyebrow labelEn="What it means" />
        <Text style={styles.paragraph}>{definition.descriptionKo}</Text>
      </View>

      <View style={styles.rangeRow}>
        <Text style={styles.rangeLabel}>정상 범위</Text>
        <Text style={styles.rangeValue}>{definition.normalRangeKo}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.display,
    fontSize: 28,
    color: colors.ink,
  },
  subtitle: {
    fontSize: 12,
    letterSpacing: 1,
    color: colors.inkFaint,
    marginBottom: spacing.lg,
  },
  valueCard: {
    backgroundColor: colors.paperRaised,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.paperLine,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  value: {
    fontFamily: typography.mono,
    fontSize: 44,
    color: colors.ink,
  },
  unit: {
    fontFamily: typography.monoRegular,
    fontSize: 18,
    color: colors.inkSoft,
  },
  valueMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  delta: {
    fontSize: 13,
    color: colors.inkSoft,
  },
  card: {
    backgroundColor: colors.paperRaised,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.paperLine,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.inkSoft,
    marginTop: spacing.xs,
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
  },
  rangeLabel: {
    fontSize: 13,
    color: colors.accentStrong,
    fontWeight: '600',
  },
  rangeValue: {
    fontFamily: typography.mono,
    fontSize: 13,
    color: colors.accentStrong,
  },
});
