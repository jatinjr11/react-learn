import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setData(data);
            console.log(data)
            setLoading(false)
        }

        fetchData();
    }, []);
    // it will render only 1st render

    return (
        <>
            <div>
                {
                    loading ? (<h1>Loading...</h1>) : (
                        <ul>
                            {data.map(user => {
                                return <li key={user.id}> {user.username}</li>
                            })}
                        </ul>
                    )
                }
            </div>
        </>
    )
}

export default DataFetcher