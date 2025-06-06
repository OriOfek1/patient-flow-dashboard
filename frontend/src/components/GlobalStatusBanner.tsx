
import React from 'react'

interface Props {
  stationData: { [key: string]: { status: string } }
}

const GlobalStatusBanner: React.FC<Props> = ({ stationData }) => {
  const statuses = Object.values(stationData).map(s => s.status)

  let globalStatus = 'fluid'
  if (statuses.includes('over_capacitated')) {
    globalStatus = 'over_capacitated'
  } else if (statuses.includes('caution')) {
    globalStatus = 'caution'
  }

  const bannerText = {
    fluid: 'PATHWAY FLOWING WELL',
    caution: 'MONITOR - SOME STATIONS BUSY',
    over_capacitated: 'ATTENTION REQUIRED - BOTTLENECKS DETECTED'
  }

  return (
    <div className={`global-banner ${globalStatus}`}>
      {bannerText[globalStatus]}
    </div>
  )
}

export default GlobalStatusBanner
