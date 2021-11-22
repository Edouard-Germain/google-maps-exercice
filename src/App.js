import { Flex, Box, Center } from '@chakra-ui/react'

import { MapContextProvider } from "./contexts/Map"
import Map from "./components/Map"
import List from './components/List'

const App = () => {
  return (
    <MapContextProvider>
      <Flex h="100vh" w="100%">
        <Box h="100%" w="30%" p={5} overflowY="scroll">
          <List />
        </Box>
        <Center background="teal" h="100%" w="70%">
          <Map />
        </Center>
      </Flex>
    </MapContextProvider>
  )
}

export default App