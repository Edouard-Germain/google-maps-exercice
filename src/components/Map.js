import { useContext } from 'react'

import GoogleMapReact from 'google-map-react'
import { MapContext } from '../contexts/Map'
import { Spinner } from "@chakra-ui/react"
import Marker from './Marker'

const Map = () => {
  const { location, bars } = useContext(MapContext)

  if (!location) {
    return <Spinner />
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={12}
      >
        {bars.map(bar =>(
          <Marker
            key={bar.id}
            lat={bar.latitude}
            lng={bar.longitude}
            bar={bar}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map