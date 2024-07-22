import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from "../services/api-Client";
import { FetchGames } from "../components/GameGrid";
import { useState } from 'react';

interface FetchGamesResponse {
  results: FetchGames[];
  next: string | null;
}

const fetchGames = (url: string) => {
  const queryClient = useQueryClient();
  const [nextPage, setNextPage] = useState<string | null>(null);

  const query = useQuery<FetchGamesResponse>({
    queryKey: ['games', url],
    queryFn: async () => {
      const { data } = await apiClient.get<FetchGamesResponse>(url);
      setNextPage(data.next);
      return {
        results: data.results,
        next: data.next,
      };
    },
    staleTime: 24 * 60 * 60 * 1000, // Cache data for 24 hours
  });

  const fetchMore = async (nextUrl: string) => {
    const { data } = await apiClient.get<FetchGamesResponse>(nextUrl);
    setNextPage(data.next);
    queryClient.setQueryData(['games', url], (oldData: FetchGamesResponse | undefined) => {
      if (!oldData) return data;
      return {
        results: [...oldData.results, ...data.results],
        next: data.next,
      };
    });
  };

  return {
    ...query,
    nextPage,
    fetchMore,
  };
};

export default fetchGames;