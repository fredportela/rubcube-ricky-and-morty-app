import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import EpisodeDetailScreen from '../screens/EpisodeDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CharactersStack() {
  return (
     <Stack.Navigator>
      <Stack.Screen 
        name="Capítulos" 
        component={CharacterListScreen} 
        options={{ headerTitle: 'Personagens' }}
      />
      <Stack.Screen 
        name="CharacterDetail" 
        component={CharacterDetailScreen} 
        options={{ headerTitle: 'Detalhes do Personagem' }}
      />
      <Stack.Screen 
        name="EpisodeDetail" 
        component={EpisodeDetailScreen} 
        options={{ headerTitle: 'Detalhes do Episódio' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'Home' ? 'list' : 'star';
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={CharactersStack} />
        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
