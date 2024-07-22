import React from "react";
import apiClient from "../services/api-Client";
import { useQuery } from "@tanstack/react-query";

interface Trailer {
  count: number;
  results: [];
}

const useGameTrailer = (id: number) => {
  const fetchGame = () =>
    apiClient.get<Trailer>(`/games/${id}/movies`).then((res) => res.data);

  return useQuery<Trailer>({
    queryKey: ["game" + id],
    queryFn: () => fetchGame(),
  });
};

export default useGameTrailer;
