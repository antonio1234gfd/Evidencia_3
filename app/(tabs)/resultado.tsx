import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultadoScreen() {
  const router = useRouter();
  const { nombre, taps } = useLocalSearchParams();
  const totalTaps = Number(taps);

  const getMensaje = () => {
    if (totalTaps < 20) return `${nombre}, ¡necesitas practicar más! 😅`;
    if (totalTaps < 40) return `¡Nada mal ${nombre}! 👍`;
    if (totalTaps < 60) return `¡Muy bien ${nombre}, eres rápido! 🔥`;
    return `¡INCREÍBLE ${nombre}! ¡Eres un maestro del tap! 🏆`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.taps}>{totalTaps} taps</Text>
      <Text style={styles.mensaje}>{getMensaje()}</Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push('/(tabs)/')}
      >
        <Text style={styles.botonTexto}>¡Jugar de nuevo!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  taps: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 16,
  },
  mensaje: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
    marginBottom: 40,
  },
  boton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  botonTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});