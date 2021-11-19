import { useContext, useState } from 'react'

import { Box, Text  } from '@chakra-ui/react'
import { FaMapMarker } from 'react-icons/fa'
import { MapContext } from '../contexts/Map'

const Marker = props => {
  const { setSelectedBar } = useContext(MapContext)
  const [infoWindowVisible, setInfoWindowVisible] = useState(false)

  return (
    <Box position="relative">
      <Box zIndex={2} visibility={infoWindowVisible ? "visible" : "hidden"} position="absolute" background="white" border="1px solid teal" borderRadius={5} p={4} bottom="100%" width="250px" left="-125px">
        <Text fontSize="24px" mb={3}><b>{props.bar.name}</b></Text>
        <Text mb={1}>{props.bar.address}</Text>
        <Text>La pinte coute: <b>{props.bar.price}€</b></Text>
      </Box>
      <FaMapMarker
        onMouseEnter={() => {
          setInfoWindowVisible(true)
          setSelectedBar(props.bar)
        }}
        onMouseLeave={() => {
          setInfoWindowVisible(false)
          setSelectedBar({})
        }}
        style={{ width: "30px", height: "30px"}}
        lat={props.lat}
        lng={props.lng}
      />
    </Box>
  )
}

export default Marker