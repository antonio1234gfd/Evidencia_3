import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MiComponente() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido al Tap Tap!</Text>
      <Text style={styles.label}>¿Cómo te llamas?</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre..."
        value={nombre}
        onChangeText={setNombre}
      />
      <Button
        title="¡Jugar!"
        onPress={() => {
          if (nombre.trim()) {
            router.push({ pathname: '/(tabs)/juego', params: { nombre } });
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});