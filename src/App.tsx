import { Button, ButtonGroup, Switch } from "@chakra-ui/react";
import { Grid, GridItem, Show, HStack, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./components/GenreList";
function App() {
  const [NavFilter, setNavFilter] = useState("");
  const [genre, setGenre] = useState<Genre | null>(null);

  return (
    <header>
      <Grid
        templateAreas={{
          base: `"nav main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap={4}
      >
        <GridItem area="nav">
          <NavBar onSelectedCatagory={(catagory) => setNavFilter(catagory)} />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding={4}>
            <GenreList onSelectedGenre={(genre) => setGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main" padding={4}>
          <GameGrid genre={genre} category={NavFilter}></GameGrid>
        </GridItem>
      </Grid>
    </header>
  );
}

export default App;
