# 📱 RMApp – Rick and Morty App

Aplicativo React Native consumindo dados da [Rick and Morty API](https://rickandmortyapi.com/documentation/).

Feito para o desafio técnico – demonstração de consumo de API REST, navegação, persistência local e listagem de dados.

---

## ✏️ Exercício escolhido

Escolhi o exercício **B: Ricky and Morty (RMApp)** porque:
- Gosto de APIs públicas e de demonstrar consumo real
- Permite mostrar navegação (stack + bottom tabs)
- Permite salvar favoritos localmente (AsyncStorage)
- É um bom equilíbrio entre front-end, lógica de negócio e UX

---

## 🏗 Estrutura de pastas

```plaintext
src/
 ├── api/                   # Serviços de API (axios)
 │   └── characterService.ts
 │   └── episodeService.ts
 ├── components/            # Componentes reaproveitáveis
 │   └── CharacterCard.tsx
 │   └── PersonCard.tsx
 ├── navigation/            # Navegação (stacks e tabs)
 │   └── AppNavigator.tsx
 ├── screens/               # Telas
 │   └── CharacterListScreen.tsx
 │   └── CharacterDetailScreen.tsx
 │   └── EpisodeDetailScreen.tsx
 │   └── FavoritesScreen.tsx
 ├── storage/               # AsyncStorage helpers
 │   └── favoritesStorage.ts
 └── App.tsx                # Entry point

```

## 📸 Prints e evidências

### ✅ Lista de personagens
![Lista](docs/screenshot_list.png)
Tela inicial do aplicativo listando personagens da série Rick and Morty.  
Inclui filtro pelo nome no topo da tela.

---

### 🧙 Detalhe do personagem
![Detalhe](docs/screenshot_detail.png)
Ao clicar em um personagem, abre uma tela com detalhes:
- Nome, status, espécie, gênero
- Localização
- Lista de episódios em que participou

---

### 🎬 Detalhe do episódio
![Episódio](docs/screenshot_episode.png)
Ao selecionar um episódio na tela do personagem, mostra todos os personagens que participaram do episódio.

---

### ⭐ Favoritos
![Favoritos](docs/screenshot_favorites.png)
Tela que exibe os personagens salvos como favoritos.
Os favoritos são persistidos localmente via AsyncStorage.

---

### ❌ Exclusão de favorito
![Exclusão](docs/screenshot_remove.png)
Exemplo de remoção de personagem da lista de favoritos (ação realizada com toque ou botão).

---


## ▶️ Como rodar e testar a aplicação

Pré-requisitos:
- Node >= 18
- Android Studio / Emulador ou dispositivo Android
- Yarn ou NPM

```bash
# Instalar dependências
npm install

# Limpar build anterior (recomendado)
cd android && ./gradlew clean && cd ..

# Iniciar Metro bundler
npm start

# Em outro terminal: compilar e rodar no Android
npx react-native run-android
