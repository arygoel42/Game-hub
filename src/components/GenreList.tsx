import React from "react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import {
  List,
  ListItem,
  Spinner,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import getCropped from "./CroppedImage";
import useGenres from "../hooks/useGenres";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface FetchGenres {
  count: number;
  results: Genre[];
}

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  //const [genres, setGenres] = useState<Genre[]>()
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true)
  //     apiClient.get<FetchGenres>('/genres')
  //         .then(res =>
  //             {setGenres(res.data.results)
  //             setLoading(false)
  //             } )
  //         .catch(err => setError(err))
  // }, [])

  const { data: genres } = useGenres();

  if (loading) return <Spinner />;

  return (
    <div>
      GenreList
      {genres?.results.map((genre) => (
        <List key={genre.id} paddingY={1} borderRadius={5}>
          <HStack>
            <Image
              height={10}
              width={10}
              src={getCropped(genre.image_background)}
              fallbackSrc={genre.image_background}
            ></Image>
            <Button onClick={() => onSelectedGenre(genre)} variant="link">
              {genre.name}{" "}
            </Button>
          </HStack>
        </List>
      ))}
    </div>
  );
};

export default GenreList;
