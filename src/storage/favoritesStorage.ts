import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'FAVORITES_KEY';

export async function addFavorite(character: any) {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  const list = json ? JSON.parse(json) : [];
  const exists = list.some((item: any) => item.id === character.id);
  if (!exists) {
    const updated = [...list, character];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
}

export async function getFavorites() {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function removeFavorite(characterId: number) {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  const list = json ? JSON.parse(json) : [];
  const filtered = list.filter((item: any) => item.id !== characterId);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
}
