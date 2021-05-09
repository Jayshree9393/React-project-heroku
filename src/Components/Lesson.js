import React from 'react'
import Img from '../Components/user.png'
import Img1 from '../Components/book.png'
import Img2 from '../Components/settings.png'
import { Link } from 'react-router-dom'
import { Upload } from 'antd'



function Lesson() {
    return (
        <div className="sidebar">
           <Link to="/students"><img src= {Img} width="40" height="40"/><img/>Students</Link>
            <Link class="active" to="/lesson"><img src= {Img1} width="40" height="40"/>Lesson Plan</Link>
             <Link to="/settings"><img src= {Img2} width="40" height="40"/>Settings</Link>
   

      <div class="content">
        <div class="main">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
          <i class="bi bi-caret-left-fill"></i>Video
        </div>
        
        <div class="urlhere">
        <input autocomplete="off" class="url" placeholder="Insert URL here"></input>
        </div>

        <div class="or">
            <p>or</p>
        </div>

        <div class="picture">
            <button class="button" onSelect="" name="my_file"  class="img">upload</button>
        </div>

      </div>
     </div>
    )
}

export default Lesson
