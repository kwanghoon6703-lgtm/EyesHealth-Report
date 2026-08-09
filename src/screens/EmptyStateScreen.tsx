import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Eyebrow } from '../components/Eyebrow';
import { colors, radius, spacing, typography } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'EmptyState'>;

export function EmptyStateScreen({ navigation }: Props) {
  return (
    <Screen contentStyle={styles.centered}>
      <View style={styles.illustrationWrap}>
        <Svg width={140} height={140} viewBox="0 0 140 140">
          <Circle cx={70} cy={70} r={66} stroke={colors.paperLine} strokeWidth={1} fill="none" />
          <Circle
            cx={70}
            cy={70}
            r={54}
            stroke={colors.accent}
            strokeWidth={1.5}
            strokeDasharray="3 6"
            fill="none"
          />
          <Ellipse cx={70} cy={70} rx={34} ry={20} fill={colors.paperRaised} stroke={colors.ink} strokeWidth={2} />
          <Circle cx={70} cy={70} r={12} fill={colors.ink} />
          <Circle cx={66} cy={66} r={3} fill={colors.paperRaised} />
        </Svg>
      </View>

      <Eyebrow labelEn="No Data Yet" align="center" />
      <Text style={styles.title}>아직 리포트가 없어요</Text>
      <Text style={styles.body}>
        EyesHealth는 휴대폰, 컴퓨터, 태블릿을 사용하는 동안 동공을 조용히 스캔해 눈 건강과 관련된 디지털 지표를
        꾸준히 기록해요.{'\n\n'}
        일주일 동안의 변화가 모이면, 첫 번째 눈건강 리포트를 이곳에서 확인할 수 있어요.
      </Text>

      <Pressable style={styles.cta} onPress={() => navigation.navigate('Overview', undefined)}>
        <Text style={styles.ctaText}>스캔 시작하기</Text>
      </Pressable>

      <Text style={styles.privacyNote}>스캔은 기기 안에서만 처리되며, 화면을 보는 동안에만 활성화돼요.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centered: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  illustrationWrap: {
    marginBottom: spacing.xl,
  },
  title: {
    fontFamily: typography.display,
    fontSize: 24,
    color: colors.ink,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.inkSoft,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  cta: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    borderRadius: radius.pill,
    marginBottom: spacing.lg,
  },
  ctaText: {
    color: colors.paperRaised,
    fontWeight: '700',
    fontSize: 16,
  },
  privacyNote: {
    fontSize: 12,
    color: colors.inkFaint,
    textAlign: 'center',
  },
});
