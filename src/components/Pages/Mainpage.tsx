import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../GameGrid";
import GenreList from "../GenreList";
import NavBar from "../NavBar";
import { useState } from "react";
import { Genre } from "../GenreList";

interface Props {
  Nav: string;
}

const Mainpage = ({ Nav }: Props) => {
  const [NavFilter, setNavFilter] = useState("");
  const [genre, setGenre] = useState<Genre | null>(null);
  return (
    <header>
      <Grid
        templateAreas={{
          lg: ` "aside main"`,
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
};

export default Mainpage;
