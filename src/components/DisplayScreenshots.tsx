import React from "react";
import { ScreenShotObject } from "../hooks/useFetchSS";
import { Img, SimpleGrid } from "@chakra-ui/react";

interface Props {
  screenshots: ScreenShotObject;
}

const DisplayScreenshots = ({ screenshots }: Props) => {
  console.log(screenshots.results);
  return (
    <div style={{ marginTop: "20px" }}>
      <SimpleGrid columns={3} spacing={10}>
        {screenshots?.results.map((screenshot) => (
          <Img src={screenshot?.image} alt="screenshot" />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default DisplayScreenshots;
