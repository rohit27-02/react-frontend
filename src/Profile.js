import React, { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
       try {
        const token = localStorage.getItem("token");
        fetch(`${process.env.REACT_APP_URL}auth/profile`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json()).then((data) => console.log(data))
       } catch (error) {
        console.log(error)
       }
    }, []);
    return (
        <div>Profile</div>
    )
}

export default Profile