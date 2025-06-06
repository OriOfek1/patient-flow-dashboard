
import React from 'react'

const CurrentBottleneckSummary = ({ stationData }) => {
  const bottleneck = Object.entries(stationData).find(([, data]) => data.status === 'over_capacitated')

  return (
    <div className="bottleneck-summary">
      <p>Current Bottleneck: {bottleneck ? bottleneck[0] : 'None'}</p>
    </div>
  )
}

export default CurrentBottleneckSummary
