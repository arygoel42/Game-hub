import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Genre} from "../components/GenreList";

import apiClient from '../services/api-Client';
import { FetchGenres } from "../components/GenreList";


const useGeneres = () => {
    const fetchGenres = () => 
        apiClient.get<FetchGenres>('/genres')
        .then(res => res.data)
       



return useQuery<FetchGenres>({
    queryKey: ['genres'],
    queryFn: () => fetchGenres(),
})

}

export default useGeneres