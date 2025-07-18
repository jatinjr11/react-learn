import React from 'react'
import seriesData from "../api/seriesData.json"
import SeriesCard from './SeriesCard'

const NetFlixSeries = () => {
    return (
        <ul className='grid grid-three-cols' >
            {seriesData.map((currElem) => (
                <SeriesCard key={currElem.id} data={currElem} />
            ))}
        </ul>
    )
}

export default NetFlixSeries;