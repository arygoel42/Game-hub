import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  text: string | undefined;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const filteredText = expanded ? text : text?.substring(0, 500) + "...";

  return (
    <div>
      <p>{filteredText}</p>
      <Button onClick={() => setExpanded(!expanded)}>
        Read {expanded ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
