import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/users'

        ).then(response => response.json())
            .then(data => {
                setData(data.users)
                setLoading(false)
            })
    }, []);
    // it will render only 1st render

    return (
        <>
            <div>
                {
                    loading ? (<h1>Loading...</h1>) : (
                        <ul>
                            {data.map(user => (
                                <li  key={user.id} > {user.firstName} </li>
                            ))}
                        </ul>
                    )}
            </div>
        </>
    )
}

export default DataFetcher