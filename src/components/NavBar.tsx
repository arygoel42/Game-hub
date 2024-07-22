import { HStack, Image, Text, Input, useColorMode} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import logo from '../assets/logo.webp'





interface Props {
  onSelectedCatagory : (catagory : string) => void
}
const NavBar = ({onSelectedCatagory}: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding={4}>
       
        <Image src={logo} boxSize={"50px"}/>
        <Text>Navbar</Text>
        <Input key="search" onChange={(event) => onSelectedCatagory(event.target.value)} variant="filled"/>
        <Switch size="md" onChange={toggleColorMode} >

              <Text  paddingY = {2} whiteSpace="nowrap"> {colorMode === 'light' ? 'Dark' : 'Light'} </Text>
            </Switch>
        
    </HStack>
  )
}

export default NavBar