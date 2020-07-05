import Region from "../models/Region"

export const calculateRegionToAskMarker: any = (mapsPositionEvent: Region) => {
  return {
    minLatitude: mapsPositionEvent.latitude - (mapsPositionEvent.latitudeDelta / 2),
    maxLatitude: mapsPositionEvent.latitude + (mapsPositionEvent.latitudeDelta / 2),
    minLongitude: mapsPositionEvent.longitude - (mapsPositionEvent.longitudeDelta / 2),
    maxLongitude: mapsPositionEvent.longitude + (mapsPositionEvent.longitudeDelta / 2)
  }
}

export const buildRegion: any = (latitude: number, longitude: number) => {
  return {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
}