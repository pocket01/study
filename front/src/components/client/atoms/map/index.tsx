'use client'

import GoogleMapUtils from '@/util/GoogleMapUtils'
import { Box } from '@mui/material'
import { useEffect } from 'react'

type PMapProps = {
  mapId?: string
  width?: number
  height?: number
}

const PMap = ({ mapId = 'map', width = 800, height = 800 }: PMapProps) => {
  useEffect(() => {
    GoogleMapUtils.loadMap(mapId)
  }, [])
  return <Box id='map' width={width} height={height} />
}

export default PMap
