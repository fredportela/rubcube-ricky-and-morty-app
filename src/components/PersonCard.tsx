import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

type Props = {
  person: {
    id: number;
    name: string;
    image?: string;
  };
  onPress?: () => void;
};

export default function PersonCard({ person, onPress }: Props) {

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        {person.image && (
          <Image
            source={{ uri: person.image }}
            style={styles.thumbnail}
          />
        )}
        <View style={styles.info}>
          <Text style={styles.name}>{person.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#d0e0ff',
    borderRadius: 8,
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
    color: '#555',
  },
});
