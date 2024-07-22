import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from "../services/api-Client";


import { Game } from '../components/DisplayGrid';




    const useGame = (slug:string ) => {
        const fetchGame = () => 
            apiClient.get<Game>('/games/'+slug)
            .then(res => res.data)
           
    
    
    
    return useQuery<Game>({
        queryKey: ['games', slug],
        queryFn: () => fetchGame() 
    })
    
    }
    
    export default useGame;