import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { getFavorites, removeFavorite } from '../storage/favoritesStorage';

export default function FavoritesScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadFavorites = useCallback(() => {
    setRefreshing(true);
    getFavorites()
      .then(setFavorites)
      .finally(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const handleRemove = (id: number) => {
    Alert.alert(
      'Remover Favorito',
      'Tem certeza que deseja remover esse personagem dos favoritos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            await removeFavorite(id);
            loadFavorites();
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Personagens', {
          screen: 'CharacterDetail',
          params: { id: item.id },
        })
      }
    >
      <View style={styles.row}>
        {item.image && (
          <Image
            source={{ uri: item.image }}
            style={styles.thumbnail}
          />
        )}
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>
            {item.status} - {item.species}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleRemove(item.id)}>
          <Text style={styles.deleteText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadFavorites} />
        }
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Nenhum favorito salvo.
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 6,
    padding: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
