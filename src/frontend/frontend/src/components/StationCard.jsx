
import React from 'react'

const StationCard = ({ stationId, data }) => {
  if (!data) return null

  return (
    <div className={`station-card ${data.status}`}>
      <h3>{stationId}</h3>
      <p>🕗 {data.patients_in_queue} in queue</p>
      <p>⏳ Avg {data.avg_time}</p>
      <p>Status: {data.status}</p>
    </div>
  )
}

export default StationCard
