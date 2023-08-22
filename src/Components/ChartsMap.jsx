import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Map from './Map'
import Chart, { GoogleDataTableColumnRoleType } from 'react-google-charts'

const LineData = [
    ['date', 'Cases', 'Deaths', 'Recovered'],
];

const LineChartOptions = {
title: 'Covid-19',
hAxis: {
    title: 'Date',
    format: "dd-MM-yy",
},
vAxis: {
    title: 'Population',
},
series: {
    1: { curveType: 'function' },
},
}

const ChartsMap = () => {

    const [map, setMap] = useState([])


    useEffect(() => {
        const fetchMap = () => {
            fetch("https://disease.sh/v3/covid-19/countries")
              .then(response => {
                return response.json()
              })
              .then(data => {
                setMap(data)
              })
          }

        const fetchCases = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
              .then(response => {
                if (!response.ok) {
                    throw new Error('Data coud not be fetched!')
                  } else {
                    return response.json()
                  }
              })
              .then(data => {
                Object.keys(data.cases)
                .filter((_, index) => index % 3 === 0)
                .forEach((date) => {
                    LineData.push(
                        [
                            new Date(date),
                            data.cases[date],
                            data.deaths[date],
                            data.recovered[date]
                        ]
                    );
                })
              })
          }
        fetchCases()

        fetchMap()
      }, [])

  return (
    <div className=' min-h-screen bg-gray-500 text-white grid grid-flow-col justify-center gap-6'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <div className='items-center text-center grid justify-evenly p-10 gap-5'>
                <Chart
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={LineData}
                    options={LineChartOptions}
                    className=' w-[800px] h-[400px] max-lg:w-[200px] m-5'
                />
                <Map cases={map} />
            </div>
        </div>
    </div>
  )
}

export default ChartsMap