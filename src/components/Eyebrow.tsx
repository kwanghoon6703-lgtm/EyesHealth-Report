import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/theme';

interface Props {
  labelEn: string;
  align?: 'left' | 'center';
}

export function Eyebrow({ labelEn, align = 'left' }: Props) {
  return (
    <View style={[styles.row, align === 'center' && styles.center]}>
      <View style={styles.tick} />
      <Text style={styles.text}>{labelEn.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  center: {
    justifyContent: 'center',
  },
  tick: {
    width: 12,
    height: 2,
    backgroundColor: colors.accent,
  },
  text: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '600',
    color: colors.inkSoft,
  },
});
