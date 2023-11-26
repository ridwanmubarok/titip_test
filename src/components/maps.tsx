"use client";
import { GoogleMap, useJsApiLoader, Polyline, Marker } from '@react-google-maps/api';
import React, { useEffect, useState, Fragment } from 'react';
import {seaRoute} from 'searoute-ts';

const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  };

  const center = {
    lat: -6.200000,
    lng: 106.816666
  };
    
  
interface MapsProps{
  vessels: Array<IVesselDetail>,
}

export default function Maps({vessels}:MapsProps){
   let api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
    const { isLoaded,loadError  } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: api
    })
    const [map, setMap] =  useState<any>(null);
    const [path, setPath] = useState<any[]>([]);
    const [mapCenter, setMapCenter] = React.useState(center);
    const encodeSearoute = () => {
      const newPath: any[] = []; 
      vessels.forEach((val, key) => {
        const origin = setGeoJSON({
          lat: val?.origin_geojson?.geometry?.coordinates[0],
          lng: val?.origin_geojson?.geometry?.coordinates[1],
        });
        const destination = setGeoJSON({
          lat: val?.destination_geojson?.geometry?.coordinates[0],
          lng: val?.destination_geojson?.geometry?.coordinates[1],
        });
        const data = seaRouteEn({ origin: origin, destination: destination });
        newPath.push(data);
      });
      setPath(newPath);
      if (newPath.length > 0) {
        const firstCoordinates = newPath[0].geometry.coordinates[0];
        setMapCenter({ lat: firstCoordinates[1], lng: firstCoordinates[0] });
      }
    };
    const setGeoJSON = ({ lat, lng }: { lat: number, lng: number }) => {
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [lat, lng],
        },
      };
    };

    const seaRouteEn =  ({ origin, destination }: {origin: any, destination: any}) => {
      return seaRoute(origin,destination);
    }

    useEffect(() =>{
      if(vessels.length > 0){
        encodeSearoute();
      }
    },[])

    if (loadError) {
      return <div>Error loading Google Maps API</div>;
    }
  
    if (!isLoaded) {
      return <>LOAD</>;
    }

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} onLoad={map => setMap(map)} zoom={3}>
          {path.map((polylineData, index) => {
             const coordinates = polylineData.geometry.coordinates.map((coord: [number, number]) => ({ lat: coord[1], lng: coord[0] }));
            const firstMarker = <Marker  key={`first-marker-${index}`} position={coordinates[0]}  />;
            const lastMarker  = <Marker  key={`last-marker-${index}`} position={coordinates[coordinates.length - 1]}  />;
            return (
              <Fragment key={index}>
                <Polyline
                  path={coordinates}
                  options={{
                    strokeColor: '#4ade80',
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                  }}
                />
                {firstMarker}
                {lastMarker}
              </Fragment>
            );
          })}
        </GoogleMap>
    )

}