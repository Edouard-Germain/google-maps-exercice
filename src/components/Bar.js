// import { useContext, useRef, useEffect } from "react"
import { useContext, useRef } from "react"

import { MapContext } from '../contexts/Map'
import { Box, Text } from '@chakra-ui/react'

const Bar = ({ bar }) => {
  const { selectedBar } = useContext(MapContext)
  const ref = useRef()

  // useEffect(() => {
  //   if (bar.id === selectedBar.id) {
  //     // ref.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [selectedBar, bar.id])
  

  return (
    <Box ref={ref} background={bar.id === selectedBar.id ? "pink" : ""} my={2} border="solid 1px teal" borderRadius={5} p={5}>
      <Text fontSize="24px" mb={3}><b>{bar.name}</b></Text>
      <Text mb={1}>{bar.address}</Text>
      <Text>La pinte coute: <b>{bar.price}€</b></Text>
    </Box>
  )
}

export default Bar