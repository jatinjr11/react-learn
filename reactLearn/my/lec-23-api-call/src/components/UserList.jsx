import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // API call inside useEffect
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data))
    //         .catch((err) => console.error(err));
    // },[]); // empty dependency array = run only on mount
    // console.log(users)

    useEffect(function () {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
            console.log(data)

            setLoading(false);
        }
        fetchData();
    }, [])


    return (
        <>
            <div>
                <h2>Users</h2>
                <ol>
                    {users.map((data) => (
                        <li key={data.id}>
                            <p style={{ backgroundColor: 'lightblue', borderRadius: "8px", color: 'black', padding: "0px 18px" }}>{data.name}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default UserList