
import React from 'react'
import StationCard from './StationCard'

const StationMap = ({ stationData }) => {
  return (
    <div className="station-map">
      {Object.entries(stationData).map(([stationId, data], index, array) => (
        <React.Fragment key={stationId}>
          <StationCard stationId={stationId} data={data} />
          {index < array.length - 1 && <div className="flow-arrow">&rarr;</div>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default StationMap
