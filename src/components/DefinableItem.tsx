import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  term: string;
  children: React.ReactNode;
}

const DefinableItem = ({ term, children }: Props) => {
  return (
    <div>
      <Box>
        <Heading size="md">{term}</Heading>
        {children}
      </Box>
    </div>
  );
};

export default DefinableItem;
