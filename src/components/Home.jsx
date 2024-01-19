import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  navigate("/students")
  return (
    <div>Home page</div>
  )
}

export default Home