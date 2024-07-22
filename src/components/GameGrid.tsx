import React, { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { Button, SimpleGrid, Grid, HStack } from "@chakra-ui/react";
import DisplayGrid from "./DisplayGrid";
import LoadingSkeleton from "./LoadingSkeleton";
import { Genre } from "./GenreList";
import FilteredGame from "./filteredGame";
import SortFilter from "./sortFilter";
import DynamicHeading from "./DynamicHeading";
import fetchGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroller";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  genres: Genre[];
  slug: string;
}

export interface FetchGames {
  count: number;
  next: string | null;
  previous: string | null;
  results: Games[];
}

interface Props {
  category: string;
  genre: Genre | null;
}

const GameGrid = ({ category, genre }: Props) => {
  // const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [nextPage, setNextPage] = useState<string | null>(null);
  const [filter, setFiltered] = useState<platform | null>(null);
  const [sort, setSort] = useState("");

  // Function to fetch games from the API
  // const fetchGames = (url: string) => {
  //   setLoading(true);
  //   apiClient.get<FetchGames>(url)
  //     .then(res => {
  //       // Append new games to the existing list
  //       setGames(prevGames => [...prevGames, ...res.data.results]);
  //       // Update the nextPage URL
  //       setNextPage(res.data.next);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err.response ? err.response.data : err.message);
  //       setLoading(false);
  //     });
  // };

  // Initial fetch based on category and genre

  let initialUrl = "/games";
  const params = [];
  if (genre) {
    params.push(`genres=${genre.slug}`);
  }

  if (category) {
    params.push(`search=${category}`);
  }

  if (sort) {
    // ordering
    params.push(`ordering=${sort}`);
  }

  if (params.length > 0) {
    initialUrl += `?${params.join("&")}`;
  }
  // Reset the game list before fetching new data

  const { data, nextPage, fetchMore } = fetchGames(initialUrl);

  const games = data?.results;

  // Function to load more games

  // Function to load more games
  const loadMoreGames = () => {
    if (nextPage) {
      fetchMore(nextPage);
    }
  };

  const filterNum = (number: number[]) => {
    const filteredNumber = number.filter((num) => num === 3);
    console.log(filteredNumber);
    console.log("hello");
  };

  const filteredGames = games?.filter((game) => {
    const filterByGenre = genre
      ? game.genres.some((g) => g.id === genre.id)
      : true;
    const filterByPlatform = filter
      ? game.parent_platforms.some((p) => p.platform.slug === filter.slug)
      : true;
    return filterByGenre && filterByPlatform;

    // const filterByPlatform = filter ? game.parent_platforms.some(p => p.platform.slug === filter) : true;
  });

  if (loading && games.length === 0) return <LoadingSkeleton />;
  <Grid templateColumns="repeat(3, 1fr)" gap={6}></Grid>;

  return (
    <div>
      <DynamicHeading
        category={category}
        genre={genre}
        filter={filter}
      ></DynamicHeading>
      <HStack>
        <FilteredGame
          onSelectedChange={(platform) => setFiltered(platform)}
        ></FilteredGame>
        <SortFilter
          onSelectedSortOrder={(order) => setSort(order)}
        ></SortFilter>
      </HStack>

      {error && <div>Error: {error}</div>}

      <InfiniteScroll
        loadMore={loadMoreGames}
        hasMore={!!nextPage}
        loader={<div>Loading...</div>}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
          <DisplayGrid posts={filteredGames} />
        </SimpleGrid>
      </InfiniteScroll>

      <Button onClick={() => filterNum([1, 2, 3, 4, 5, 6, 7])}>
        Load More
      </Button>
    </div>
  );
};

export default GameGrid;
