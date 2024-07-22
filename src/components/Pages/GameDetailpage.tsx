import React from "react";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import DefinableItem from "../DefinableItem";
import useGameTrailer from "../../hooks/useGameTrailer";
import FetchScreenhots from "../../hooks/useFetchSS";
import DisplayScreenshots from "../DisplayScreenshots";

const GameDetailpage = () => {
  const { slug, id } = useParams();

  const { data, isLoading } = useGame(slug!);

  const { data: trailer } = useGameTrailer(data?.id!);
  {
    console.log(trailer);
  }

  const { data: screenshots } = FetchScreenhots(data?.id!);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <NavBar onSelectedCatagory={(catagory) => console.log(catagory)} />
      <Heading> {data?.name}</Heading>
      <ExpandableText text={data?.description_raw} />

      <SimpleGrid columns={4} as={"dl"}>
        <DefinableItem term="Rating">{data?.metacritic}</DefinableItem>

        <DefinableItem term="Genres">
          {data?.genres?.map((genre) => (
            <div>{genre.name}</div>
          ))}
        </DefinableItem>

        <DefinableItem term="Publishers">
          {data?.publishers?.map((publisher) => (
            <div>{publisher.name}</div>
          ))}
        </DefinableItem>

        <DefinableItem term="Platforms">
          {data?.parent_platforms?.map((platform) => (
            <div key={platform.platform.id}>{platform.platform.name}</div>
          ))}
        </DefinableItem>
      </SimpleGrid>

      {trailer?.results[0] && (
        <video
          src={trailer?.results[0]?.data.max}
          poster={trailer?.results[0]}
          controls
          width={"1200px"}
        ></video>
      )}

      {screenshots && <DisplayScreenshots screenshots={screenshots} />}
    </div>
  );
};

export default GameDetailpage;
