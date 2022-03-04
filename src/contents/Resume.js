import React, { Component } from 'react'
import ResumeThumbnail from '../img/Resume.PNG';

class Resume extends Component {


    render() {
        return (
            <div className="condiv skills">
            {/* <h1 className="subtopic"></h1> */}
             <a href="https://drive.google.com/file/d/1HDhWHqSX3qyl_Di7Oq4YsbgteLHOHMCq/view?usp=sharings">
                 <img src={ResumeThumbnail} alt="ResumeThumbnail" className="ResumeThumbnail"></img></a>
            </div>
            )
        }
    }
    
    export default Resume
    