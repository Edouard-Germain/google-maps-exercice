import { useContext } from "react"

import { MapContext } from '../contexts/Map'
import { Box, Text } from '@chakra-ui/react'
import Bar from './Bar'

const List = () => {
  const { bars } = useContext(MapContext)  

  return (
    <Box>
      <Text fontSize="24px" mb={3}><b>Liste des bars</b></Text>
      {bars.map(bar => (
          <Bar key={bar.id} bar={bar} />
        )
      )}
    </Box>
  )
}

export default List
