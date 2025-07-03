import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(name: string = '') {
  const response = await axios.get(`${API_URL}/character`, {
    params: { name }
  });
  return response.data.results;
}

export async function fetchCharacterById(id: number) {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
}

export async function fetchEpisodeById(id: number) {
  const response = await axios.get(`${API_URL}/episode/${id}`);
  return response.data;
}

export async function fetchMultipleCharacters(ids: number[]) {
  const response = await axios.get(`${API_URL}/character/${ids.join(',')}`);
  return Array.isArray(response.data) ? response.data : [response.data];
}
