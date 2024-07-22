import React from "react";
import {
  Grid,
  Card,
  Image,
  CardBody,
  Text,
  Icon,
  HStack,
  Box,
} from "@chakra-ui/react";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaSteam,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";
import CriticScore from "./CriticScore";

import getCropped from "./CroppedImage";
import LoadingSkeleton from "./LoadingSkeleton";
import { Link } from "react-router-dom";
import { Genre } from "./GenreList";

interface publisher {
  name: string;
  slug: string;
}
interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  slug: string;
  publisher: publisher[];
  genres: Genre[];
}

interface Props {
  posts: Game[];
}

export const Iconmap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  pc: FaGamepad,
  web: FaSteam,
};

const DisplayGrid = ({ posts }: Props) => {
  if (!posts) return <LoadingSkeleton />; // Check if posts is undefined or null

  if (posts.length === 0) return <LoadingSkeleton />;

  // Rest of the component code...

  const filterPost = posts.filter(
    (post, index, self) => index === self.findIndex((p) => p.id === post.id)
  );

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {filterPost?.map((post) => (
        <Card
          width="390px"
          key={post.id}
          _hover={{ transform: "scale(1.05)", transition: "transform 0.15s" }}
        >
          <Image
            src={getCropped(post.background_image)}
            alt={post.name}
            fallbackSrc="https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          />
          <CardBody>
            {<Link to={"/gameHub/" + post.slug}>{post.name}</Link>}
            <HStack margin={1} justifyContent="space-between">
              <div>
                {post.parent_platforms?.map((platform) => (
                  <Box as="span" mx={2}>
                    <Icon
                      as={Iconmap[platform.platform.slug]}
                      color="gray.500"
                    ></Icon>
                  </Box>
                ))}
              </div>

              <div>
                <CriticScore score={post.metacritic}></CriticScore>
              </div>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default DisplayGrid;
