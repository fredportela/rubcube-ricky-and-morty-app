import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { fetchCharacters } from '../api/rickAndMortyService';
import CharacterCard from '../components/CharacterCard';

export default function CharacterListScreen({ navigation }: any) {
  const [filter, setFilter] = useState('');
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    fetchCharacters(filter).then(setCharacters).catch(() => setCharacters([]));
  }, [filter]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Buscar personagem"
        value={filter}
        onChangeText={setFilter}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() => navigation.navigate('CharacterDetail', { id: item.id })}
          />
        )}
      />
    </View>
  );
}
