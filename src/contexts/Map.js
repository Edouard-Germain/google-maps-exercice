import { createContext, useState, useEffect } from "react";

import barsArray from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = props => {
  const [location, setLocation] = useState(null)
  const [bars] = useState(barsArray)
  const [selectedBar, setSelectedBar] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      });
    } else {
      console.log("no position")
    }
  }, [])

  const value = {
    location,
    bars,
    selectedBar,
    setSelectedBar
  }

  return (
    <MapContext.Provider value={value}>
      {props.children}
    </MapContext.Provider>
  )
}

export {
  MapContext,
  MapContextProvider
}
