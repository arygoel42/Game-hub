import apiClient from '../services/api-Client';
import { useQuery } from '@tanstack/react-query';
import FetchPlatforms from '../components/filteredGame';


interface FetchPlatforms {
    count: number;
    results: platforms[];
    
    
}

interface platforms {
    id: number;
    name: string;
    slug: string;
    
}

const fetchPlatforms = () => {

    const addPlatforms = () => 
        apiClient.get<FetchPlatforms>('/platforms/lists/parents')
        .then(res => res.data)

return useQuery<FetchPlatforms>({
        queryKey: ['platforms'],
        queryFn: () => addPlatforms(),
        staleTime: 24*60*60*1000,
        
    
})

}






export default fetchPlatforms