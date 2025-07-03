import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchEpisodeById, fetchMultipleCharacters } from '../api/rickAndMortyService';
import { formatAirDate } from '../util';
import PersonCard from '../components/PersonCard';

export default function EpisodeDetailScreen({ route }: any) {
  const [episode, setEpisode] = useState<any>(null);
  const [characters, setCharacters] = useState<any[]>([]);
  const id = route.params.id;

  useEffect(() => {
    fetchEpisodeById(id).then(async (ep) => {
      setEpisode(ep);
      const ids = ep.characters.map((url: string) => Number(url.split('/').pop()));
      const chars = await fetchMultipleCharacters(ids);
      setCharacters(chars);
    });
  }, [id]);

  if (!episode) return <Text>Loading...</Text>;

  const formattedDate = formatAirDate(episode.air_date);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{episode.name}</Text>
      <Text>Data: {formattedDate}</Text>
      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Personagens:</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PersonCard person={item} />
        )}
      />
    </View>
  );
}
