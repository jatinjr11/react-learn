import React from 'react'

const SeriesCard = (props) => {
    console.log(props);

    return (
        <li>
            <div>
                <img src={props.data.img_url} alt="asas" width="40%" height="40%" />
            </div>
            <h2>Name: {props.data.name} </h2>
            <h3>Rating: {props.data.rating}</h3>
            <p>Summary: {props.data.description}</p>
            <p>Genre: {props.data.genre}</p>
            <p>Cast: {props.data.cast}</p>
            <a href={props.data.watch_url} target='_blank'>
                <button>Watch Now</button>
            </a>
        </li>
    );
}

export default SeriesCard