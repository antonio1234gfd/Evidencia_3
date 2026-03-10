import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { FlatList, StyleSheet } from 'react-native';

const elementos = [
  { id: '1', nombre: 'Elemento 1' },
  { id: '2', nombre: 'Elemento 2' },
  { id: '3', nombre: 'Elemento 3' },
  { id: '4', nombre: 'Elemento 4' },
  { id: '5', nombre: 'Elemento 5' },
];

export default function ListaScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titulo}>Mi Lista</ThemedText>
      <FlatList
        data={elementos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.item}>
            <ThemedText>{item.nombre}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  titulo: {
    marginBottom: 16,
  },
  item: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#e0f7fa',
  },
});