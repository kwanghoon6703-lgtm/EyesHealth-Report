import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';
import { TrendPoint } from '../types';
import { colors, typography } from '../theme/theme';

interface Props {
  points: TrendPoint[];
  width: number;
  height?: number;
}

export function TrendLineChart({ points, width, height = 160 }: Props) {
  const padding = 20;
  const values = points.map((p) => p.score);
  const min = Math.min(...values) - 4;
  const max = Math.max(...values) + 4;
  const range = max - min || 1;

  const stepX = (width - padding * 2) / Math.max(points.length - 1, 1);
  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y = padding + (1 - (p.score - min) / range) * (height - padding * 2);
    return { x, y, score: p.score };
  });

  const polylinePoints = coords.map((c) => `${c.x},${c.y}`).join(' ');
  const areaPath = `M ${coords[0].x},${height - padding} ${coords
    .map((c) => `L ${c.x},${c.y}`)
    .join(' ')} L ${coords[coords.length - 1].x},${height - padding} Z`;

  return (
    <View>
      <Svg width={width} height={height}>
        {[0.25, 0.5, 0.75].map((f) => (
          <Line
            key={f}
            x1={padding}
            x2={width - padding}
            y1={padding + f * (height - padding * 2)}
            y2={padding + f * (height - padding * 2)}
            stroke={colors.paperLine}
            strokeWidth={1}
          />
        ))}
        <Path d={areaPath} fill={colors.accentSoft} opacity={0.7} />
        <Polyline
          points={polylinePoints}
          fill="none"
          stroke={colors.accent}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {coords.map((c, i) => (
          <Circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={i === coords.length - 1 ? 5 : 3}
            fill={i === coords.length - 1 ? colors.accent : colors.paperRaised}
            stroke={colors.accent}
            strokeWidth={2}
          />
        ))}
      </Svg>
      <View style={styles.axisRow}>
        <Text style={styles.axisLabel}>{formatShort(points[0].weekOf)}</Text>
        <Text style={styles.axisLabel}>{formatShort(points[points.length - 1].weekOf)}</Text>
      </View>
    </View>
  );
}

function formatShort(iso: string) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}.${d.getDate()}`;
}

const styles = StyleSheet.create({
  axisRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 4,
  },
  axisLabel: {
    fontFamily: typography.monoRegular,
    fontSize: 11,
    color: colors.inkFaint,
  },
});
