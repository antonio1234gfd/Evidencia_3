import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// --- CONFIGURACIÓN DE COLORES PERSONALIZADOS ---
const MiTemaClaro = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5733',    // <--- Color de botones, enlaces y pestañas activas
    background: '#FFFFFF', // <--- Color de fondo de TODA la app
    card: '#F0F0F0',       // <--- Color de la barra superior (Header)
    text: '#1A1A1A',       // <--- Color de las letras
    border: '#D1D1D1',     // <--- Color de líneas divisorias
  },
};

const MiTemaOscuro = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#FFBD33',    // <--- Color de botones en modo oscuro
    background: '#121212', // <--- Fondo oscuro
    card: '#1E1E1E',       // <--- Barra superior oscura
    text: '#FFFFFF',       // <--- Letras blancas
  },
};
// ----------------------------------------------

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // Aquí es donde aplicamos nuestros temas personalizados
    <ThemeProvider value={colorScheme === 'dark' ? MiTemaOscuro : MiTemaClaro}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}