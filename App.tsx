import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, NotoSerifKR_400Regular, NotoSerifKR_600SemiBold } from '@expo-google-fonts/noto-serif-kr';
import { JetBrainsMono_400Regular, JetBrainsMono_500Medium } from '@expo-google-fonts/jetbrains-mono';

import { RootStackParamList } from './src/navigation/types';
import { OverviewScreen } from './src/screens/OverviewScreen';
import { MetricDetailScreen } from './src/screens/MetricDetailScreen';
import { TrendScreen } from './src/screens/TrendScreen';
import { EmptyStateScreen } from './src/screens/EmptyStateScreen';
import { colors, typography } from './src/theme/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.paper,
    card: colors.paper,
    text: colors.ink,
    border: colors.paperLine,
    primary: colors.accent,
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    NotoSerifKR_400Regular,
    NotoSerifKR_600SemiBold,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  const onLayout = useCallback(() => {}, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.paper },
            headerShadowVisible: false,
            headerTintColor: colors.ink,
            headerTitleStyle: { fontFamily: typography.display, fontSize: 17 },
            headerBackButtonDisplayMode: 'minimal',
            contentStyle: { backgroundColor: colors.paper },
          }}
        >
          <Stack.Screen name="Overview" component={OverviewScreen} options={{ title: '눈건강 리포트' }} />
          <Stack.Screen name="MetricDetail" component={MetricDetailScreen} options={{ title: '지표 상세' }} />
          <Stack.Screen name="Trend" component={TrendScreen} options={{ title: '추이' }} />
          <Stack.Screen
            name="EmptyState"
            component={EmptyStateScreen}
            options={{ title: '', headerTransparent: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
