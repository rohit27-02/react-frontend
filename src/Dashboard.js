import React,{useEffect} from 'react'

const Dashboard = () => {
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      fetch(`${process.env.REACT_APP_URL}admin/dashboard`, {
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
    <div>Dashboard</div>
  )
}

export default Dashboard