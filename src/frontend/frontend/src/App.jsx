
import React, { useEffect, useState } from 'react'
import GlobalStatusBanner from './components/GlobalStatusBanner'
import StationMap from './components/StationMap'
import CurrentBottleneckSummary from './components/CurrentBottleneckSummary'

const App = () => {
  const [stationData, setStationData] = useState({})

  const fetchData = async () => {
    try {
      const response = await fetch('/api/station_status')
      const data = await response.json()
      setStationData(data)
    } catch (error) {
      console.error('Error fetching station data:', error)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <GlobalStatusBanner stationData={stationData} />
      <StationMap stationData={stationData} />
      <CurrentBottleneckSummary stationData={stationData} />
    </div>
  )
}

export default App
