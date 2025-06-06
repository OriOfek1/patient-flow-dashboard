
import React from 'react'

interface Props {
  stationData: { [key: string]: { status: string } }
}

const CurrentBottleneckSummary: React.FC<Props> = ({ stationData }) => {
  const bottleneck = Object.entries(stationData).find(([, data]) => data.status === 'over_capacitated')

  return (
    <div className="bottleneck-summary">
      <p>Current Bottleneck: {bottleneck ? bottleneck[0] : 'None'}</p>
    </div>
  )
}

export default CurrentBottleneckSummary
