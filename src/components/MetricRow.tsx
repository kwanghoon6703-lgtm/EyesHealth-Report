import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MetricDefinition, MetricReading } from '../types';
import { colors, radius, spacing, typography } from '../theme/theme';
import { StatusPill } from './StatusPill';

interface Props {
  definition: MetricDefinition;
  reading: MetricReading;
  onPress: () => void;
}

export function MetricRow({ definition, reading, onPress }: Props) {
  const deltaSign = reading.deltaFromLastWeek > 0 ? '+' : '';
  const deltaLabel =
    reading.deltaFromLastWeek === 0
      ? '지난주와 동일'
      : `${deltaSign}${reading.deltaFromLastWeek} · 지난주 대비`;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <View style={styles.left}>
        <Text style={styles.labelKo}>{definition.labelKo}</Text>
        <Text style={styles.labelEn}>{definition.labelEn.toUpperCase()}</Text>
        <Text style={styles.delta}>{deltaLabel}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>
          {reading.value}
          <Text style={styles.unit}> {definition.unit}</Text>
        </Text>
        <StatusPill status={reading.status} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
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
  left: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  labelKo: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: 2,
  },
  labelEn: {
    fontSize: 11,
    letterSpacing: 1,
    color: colors.inkFaint,
    marginBottom: 6,
  },
  delta: {
    fontSize: 12,
    color: colors.inkSoft,
  },
  right: {
    alignItems: 'flex-end',
    gap: 6,
  },
  value: {
    fontFamily: typography.mono,
    fontSize: 20,
    color: colors.ink,
  },
  unit: {
    fontFamily: typography.monoRegular,
    fontSize: 12,
    color: colors.inkSoft,
  },
});
