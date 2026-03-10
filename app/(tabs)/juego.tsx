import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function JuegoScreen() {
  const router = useRouter();
  const { nombre } = useLocalSearchParams();
  const [taps, setTaps] = useState(0);
  const [tiempo, setTiempo] = useState(10);
  const [iniciado, setIniciado] = useState(false);
  const intervalo = useRef<any>(null);

  useEffect(() => {
    if (iniciado && tiempo > 0) {
      intervalo.current = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);
    }
    if (tiempo === 0) {
      clearInterval(intervalo.current);
      router.push({ pathname: '/(tabs)/resultado', params: { nombre, taps } });
    }
    return () => clearInterval(intervalo.current);
  }, [iniciado, tiempo]);

  const handleTap = () => {
    if (!iniciado) setIniciado(true);
    if (tiempo > 0) setTaps((t) => t + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>¡Vamos {nombre}!</Text>
      <Text style={styles.tiempo}>⏱ {tiempo}s</Text>
      <Text style={styles.taps}>{taps} taps</Text>
      <TouchableOpacity style={styles.boton} onPress={handleTap} activeOpacity={0.7}>
        <Text style={styles.botonTexto}>
          {iniciado ? '👆 TAP!' : '¡Toca para empezar!'}
        </Text>
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
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  tiempo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  taps: {
    fontSize: 36,
    color: '#3498db',
    marginBottom: 40,
  },
  boton: {
    backgroundColor: '#3498db',
    paddingVertical: 40,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  botonTexto: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});