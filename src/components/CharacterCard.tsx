import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: { name: string };
  };
  onPress?: () => void;
};

export default function CharacterCard({ character, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Espécie: {character.species}</Text>
      <Text>Gênero: {character.gender}</Text>
      <Text>Localidade: {character.location?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
