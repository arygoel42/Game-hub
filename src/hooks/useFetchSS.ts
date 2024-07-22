import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-Client";

export interface ScreenShotObject {
    count: number
    results: []


    
}



const FetchScreenhots = (id: number) => {



    const fetchSS = () => 
        apiClient
            .get<ScreenShotObject>(`/games/${id}/screenshots`)
            .then((res) => res.data)
    

    return useQuery<ScreenShotObject>({
        queryKey: ['ss', id],
        queryFn: () => fetchSS(),
        staleTime: 24 * 60 * 60 * 1000,
    })
}

export default FetchScreenhots