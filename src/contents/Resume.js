import React, { Component } from 'react'
import ResumeThumbnail from '../img/Resume.PNG';

class Resume extends Component {


    render() {
        return (
            <div className="condiv skills">
            {/* <h1 className="subtopic"></h1> */}
            <img src={ResumeThumbnail} alt="ResumeThumbnail" className="ResumeThumbnail"></img>
            </div>
            )
        }
    }
    
    export default Resume
    