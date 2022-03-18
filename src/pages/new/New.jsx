import React from 'react'
import './new.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="new__top">
          <h1>Add new user </h1>

        </div>
        <div className="new__bottom">
          <div className="new__left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="new__right">
           <form>
           <div className="new__formInput">
               <label htmlFor='file'>Image:<DriveFolderUploadIcon className="icon"/></label>
               <input type="file" id='file' style={{display:'none'}}/>
             </div>
             <div className="new__formInput">
               <label>Username</label>
               <input type="text" placeholder='John Doe' />
             </div>
             <div className="new__formInput">
               <label>Name and Surname</label>
               <input type="text" placeholder='John Doe' />
             </div>
             <div className="new__formInput">
               <label>Email </label>
               <input type="email" placeholder='john.doe@gmail.com' />
             </div>
             <div className="new__formInput">
               <label>Phone </label>
               <input type="text" placeholder='+436894637849378  ' />
             </div>
             <div className="new__formInput">
               <label>Password </label>
               <input type="password"  />
             </div>
             <div className="new__formInput">
               <label>Address</label>
               <input type="text" placeholder="Elton str,10"  />
             </div>
             <div className="new__formInput">
               <label>Country</label>
               <input type="text" placeholder="USA"  />
             </div>
             <button>Send</button>
           </form>
          </div>

        </div>

      </div>


    </div>
  )
}

export default New