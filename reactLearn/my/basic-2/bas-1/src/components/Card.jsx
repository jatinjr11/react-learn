function Card(props) {

    console.log(props)

    return (
        <>
            <div className="card">
                <img src={props.img} alt="img alt" />
                <h1>{props.user}</h1>
                <p>{props.age}</p>
                <button>View Profile</button>

            </div>
        </>
    )
}

export default Card;