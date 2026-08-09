import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MetricStatus } from '../types';
import { colors } from '../theme/theme';

const STATUS_COPY: Record<MetricStatus, string> = {
  good: '양호',
  watch: '주의',
  attention: '관찰 필요',
};

const STATUS_COLOR: Record<MetricStatus, { bg: string; fg: string }> = {
  good: { bg: colors.accentSoft, fg: colors.accentStrong },
  watch: { bg: colors.warnSoft, fg: colors.warn },
  attention: { bg: '#F6E4DE', fg: '#B3492E' },
};

export function StatusPill({ status }: { status: MetricStatus }) {
  const c = STATUS_COLOR[status];
  return (
    <View style={[styles.pill, { backgroundColor: c.bg }]}>
      <View style={[styles.dot, { backgroundColor: c.fg }]} />
      <Text style={[styles.text, { color: c.fg }]}>{STATUS_COPY[status]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
