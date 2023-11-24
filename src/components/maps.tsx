"use client";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useMemo } from 'react'


const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  };
  
  const center = {
    lat: -6.200000,
    lng: 106.816666
  };
  

export default function Maps(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k"
      })
      const [map, setMap] = React.useState(null)

    if(!isLoaded){
      return (
        <>LOAD</>
      )
    }

    return (
         <GoogleMap
              mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
              </GoogleMap>
    )

}