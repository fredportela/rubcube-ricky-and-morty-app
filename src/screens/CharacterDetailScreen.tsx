import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { fetchCharacterById } from '../api/rickAndMortyService';
import { addFavorite } from '../storage/favoritesStorage';

export default function CharacterDetailScreen({ route, navigation }: any) {
  const [character, setCharacter] = useState<any>(null);
  const id = route.params.id;

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, [id]);

  const handleAddFavorite = () => {
    Alert.alert(
      'Adicionar aos Favoritos',
      `Deseja adicionar "${character.name}" aos seus favoritos?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Adicionar',
          onPress: async () => {
            await addFavorite(character);
            Alert.alert('Sucesso', 'Personagem adicionado aos favoritos!');
          },
        },
      ]
    );
  };

  if (!character) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Espécie: {character.species}</Text>
      <Text>Gênero: {character.gender}</Text>
      <Text>Localidade: {character.location?.name}</Text>

      <Button title="Favoritar" onPress={handleAddFavorite} />

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Episódios:</Text>
      <FlatList
        data={character.episode}
        keyExtractor={(ep: string) => ep}
        renderItem={({ item }) => {
          const epId = Number(item.split('/').pop());
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('EpisodeDetail', { id: epId })}
              style={styles.card}
            >
              <Text style={{ padding: 5 }}>Episódio {epId}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#d0e0ff',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

