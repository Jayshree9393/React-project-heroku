import React from 'react'
import Img from '../Components/user.png'
import Img1 from '../Components/book.png'
import Img2 from '../Components/settings.png'
import { Link } from 'react-router-dom'




function Sidebar() {
    return (
      <div className="sidebar">
           <Link to="/students"><img src= {Img} width="40" height="40"/><img/>Students</Link>
            <Link class="active" to="/lesson"><img src= {Img1} width="40" height="40"/>Lesson Plan</Link>
             <Link to="/settings"><img src= {Img2} width="40" height="40"/>Settings</Link>
   

      <div class="content">
        
      </div>
      </div>
    )
}

export default Sidebar
