import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import './single.css'

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="single__top">
          <div className="single__left">
            <div className="single__editButton">Edit</div>
              <h1 className="single__title">Information</h1>
              <div className="single__item">
                <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg" alt="" className="single__itemImage" />
                 <div className="single__details">
                   <h1 className="single__itemTitle">Jae Dow</h1>
                   <div className="single__detailItem">
                     <span className="single__itemKey">Email:</span>
                     <span className="single__itemValue">jaedow@gmail.com</span>
                   </div>
                   <div className="single__detailItem">
                     <span className="single__itemKey">Phone:</span>
                     <span className="single__itemValue">+648336849</span>
                   </div>
                   <div className="single__detailItem">
                     <span className="single__itemKey">Address:</span>
                     <span className="single__itemValue">Colorado Springs, 12212</span>
                   </div>
                   <div className="single__detailItem">
                     <span className="single__itemKey">Country:</span>
                     <span className="single__itemValue">USA</span>
                   </div>
                 </div>
              </div>
          </div>
          <div className="single__right">
            <Chart/>
          </div>

        </div>
        <div className="single__bottom">
           <List />
        </div>

      </div>
    </div>
  )
}

export default Single