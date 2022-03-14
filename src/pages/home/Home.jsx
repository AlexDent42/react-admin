import React from 'react'
import './home.css'
import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
  return (
   <div className="home">
     <Sidebar />
     <div className="homeCOntainer">Container</div>
   </div>
  )
}

export default Home