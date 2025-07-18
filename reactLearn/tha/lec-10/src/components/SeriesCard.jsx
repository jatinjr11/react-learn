import React from 'react'

const SeriesCard = ({ data }) => {
    console.log(data);
    // const { id, img_url, name, rating, description, genre, cast, watch_url } = props.data;
    const { id, img_url, name, rating, description, genre, cast, watch_url } = data;

    const btnStyle = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
    }

    const ratingClass = rating >= 8.5 ? "super_hit" : "average"

    return (
        <li className='card' >
            <div>
                <img src={img_url} alt="asas" width="40%" height="40%" />
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <h2>Name: {name} </h2>
                <h3 style={{ margin: "1.2rem 0" }}>Rating:
                    <span className={`rating ${ratingClass} `} > {rating}</span>
                </h3>
                <p style={{ margin: "1.2rem 0" }} >Summary: {description}</p>
                <p style={{ margin: "1.2rem 0" }}>Genre: {genre}</p>
                <p style={{ margin: "1.2rem 0" }}>Cast: {cast}</p>
                <a href={watch_url} target='_blank' >
                    <button style={btnStyle} >Watch Now</button>
                </a>
            </div>
        </li>
    );
}

export default SeriesCard