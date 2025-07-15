import React from 'react'
import seriesData from "../api/seriesData.json"

const NetFlixSeries = () => {
    return (
        <>
            <ul>
                {
                    seriesData.map((currElem) => {
                      return(  <li >
                            <div>
                                <img src={currElem.img_url} alt="asas" width="40%" height="40%" />
                            </div>
                            <h2>Name: {currElem.name} </h2>
                            <h3>Rating: {currElem.rating}</h3>
                            <p>Summary: {currElem.description}</p>
                            <p>Genre: {currElem.genre}</p>
                            <p>Cast: {currElem.cast}</p>
                            <a href={currElem.watch_url} target='_blank'>
                                <button>Watch Now</button>
                            </a>
                        </li>
                      );
                    })
                }

            </ul>
            {/* <button> {age>= 18 ? "Watch now" : "Not Avail"} </button> */}
        </>
    )
}

export default NetFlixSeries;