import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Eyebrow } from '../components/Eyebrow';
import { StatusPill } from '../components/StatusPill';
import { TrendLineChart } from '../components/TrendLineChart';
import { trendHistory, weeklyReports } from '../data/mockData';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Trend'>;

const screenWidth = Dimensions.get('window').width;

export function TrendScreen({ navigation }: Props) {
  const latest = trendHistory[trendHistory.length - 1];
  const earliest = trendHistory[0];
  const change = latest.score - earliest.score;

  return (
    <Screen>
      <Eyebrow labelEn="Trend Over Time" />
      <Text style={styles.title}>지난 9주 추이</Text>
      <Text style={styles.subtitle}>
        {change >= 0 ? '+' : ''}
        {change}점 · {formatRange(earliest.weekOf, latest.weekOf)}
      </Text>

      <View style={styles.card}>
        <TrendLineChart points={trendHistory} width={screenWidth - spacing.lg * 2 - spacing.lg * 2} height={180} />
      </View>

      <View style={styles.sectionHeader}>
        <Eyebrow labelEn="Weekly Reports" />
        <Text style={styles.sectionTitle}>주간 리포트 기록</Text>
      </View>

      {weeklyReports.map((report) => (
        <Pressable
          key={report.weekOf}
          style={({ pressed }) => [styles.reportRow, pressed && styles.pressed]}
          onPress={() => navigation.navigate('Overview', { report })}
        >
          <View>
            <Text style={styles.reportWeek}>{report.weekLabelKo}</Text>
            <Text style={styles.reportScans}>{report.scanCount}회 스캔</Text>
          </View>
          <View style={styles.reportRight}>
            <Text style={styles.reportScore}>{report.score}</Text>
            <StatusPill status={report.scoreStatus} />
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}

function formatRange(startIso: string, endIso: string) {
  const s = new Date(startIso);
  const e = new Date(endIso);
  return `${s.getMonth() + 1}.${s.getDate()} – ${e.getMonth() + 1}.${e.getDate()}`;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.display,
    fontSize: 28,
    color: colors.ink,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: typography.monoRegular,
    fontSize: 13,
    color: colors.inkSoft,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.paperRaised,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.paperLine,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontFamily: typography.display,
    fontSize: 20,
    color: colors.ink,
  },
  reportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.paperRaised,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.paperLine,
    marginBottom: spacing.sm,
  },
  pressed: {
    opacity: 0.6,
  },
  reportWeek: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: 4,
  },
  reportScans: {
    fontSize: 12,
    color: colors.inkFaint,
  },
  reportRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  reportScore: {
    fontFamily: typography.mono,
    fontSize: 20,
    color: colors.ink,
  },
});
