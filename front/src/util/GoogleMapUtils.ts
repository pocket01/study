import { Loader } from '@googlemaps/js-api-loader'

const defaultOption: google.maps.MapOptions = {
  center: {
    // 緯度
    lat: 35.680959106959,
    // 経度
    lng: 139.76730676352,
  },
  // 拡大率
  zoom: 16,
}

const loadMap = async (mapId: string, mapOption = defaultOption) => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
    version: 'weekly',
  })

  await loader
    .importLibrary('maps')
    .then(({ Map }) => {
      new Map(document.getElementById(mapId) as HTMLElement, mapOption)
    })
    .catch((e) => {
      console.error(e)
    })
}

const GoogleMapUtils = {
  loadMap,
}

export default GoogleMapUtils
