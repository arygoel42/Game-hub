import React, { useEffect, useState } from 'react';
import { Iconmap } from './DisplayGrid';
import { Select, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import apiClient from '../services/api-Client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import  fetchPlatforms from '../hooks/usePlatforms';

interface Props {
    onSelectedChange: (platform: FetchPlatforms | null) => void;
}

 interface FetchPlatforms {
    id: number;
    name: string;
    slug: string;
}

const FilteredGamed = ({ onSelectedChange }: Props) => {
    // const [platforms, setPlatforms] = useState<FetchPlatforms[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //     setLoading(true);
    //     apiClient.get<{ results: FetchPlatforms[] }>('/platforms/lists/parents')
    //         .then(res => {
    //             setPlatforms(res.data.results);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             setError(err);
    //             setLoading(false);
    //         });
    // }, []);




   const {data: platforms} = fetchPlatforms()

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                select platform
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectedChange(null)}>All</MenuItem>
                {platforms?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectedChange(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default FilteredGamed;