
---

## 🛣 `ROADMAP.md`

```markdown
# 🛣 Roadmap – RMApp

## ✅ Histórias atendidas

### História 1
> "Visualizar todos os personagens da série Ricky and Morty, podendo filtrar pelo nome..."

- Consumido via `axios` na service `characterService.ts`
- Tela `CharacterListScreen.tsx` com `FlatList` e filtro no `TextInput`
- Exibe: name, status, species, gender, location, episódios

---

### História 2
> "Visualizar características de um episódio ao acessar detalhe do personagem..."

- Tela `CharacterDetailScreen.tsx` mostra episódios
- Clique abre `EpisodeDetailScreen.tsx` listando personagens participantes do episódio

---

### História 3
> "Salvar personagens favoritos em uma lista separada..."

- Persistência local usando `AsyncStorage` (`favoritesStorage.ts`)
- Tela `FavoritesScreen.tsx` lista favoritos
- Exclusão de favoritos com alerta de confirmação

---

## ➕ O que adicionaria se tivesse mais tempo

- Paginação infinita da lista de personagens
- Indicador de loading (spinner)
- Mensagens de erro (API off, sem internet)
- Testes unitários com Jest
- Dark mode / temas

---

## ✏️ O que faria diferente

- Separaria lógica em hooks customizados (ex: `useFavorites`)
- Usaria Context API para estado global dos favoritos
