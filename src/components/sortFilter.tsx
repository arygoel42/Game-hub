import React from 'react'
import { Button, Menu, MenuButton, MenuList, MenuItem,  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';



interface Props {
    onSelectedSortOrder : (sortOrder:string) => void
}

const sortOrder = [
    {value: '', label: 'Relevance'},
    {value: 'name', label: 'Name'},
    {value: '-added', label: 'Date added'},
    {value: '-released', label: 'Release Date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average Rating'},
]
const SortFilter = ({onSelectedSortOrder} : Props) => {
  return (
    <div>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    {sortOrder.map((order) => <MenuItem onClick={() => onSelectedSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
  </MenuList>
</Menu>



    </div>
  )
}

export default SortFilter