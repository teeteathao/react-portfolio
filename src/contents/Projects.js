import React, { Component } from 'react';
import TripPlanner from '../img/TripPlannerProj.png';
import GeekSeek from '../img/GeekSeekProj.png';
import PasswordGen from '../img/PasswordGenProj.png';
import CalendarProj from '../img/CalendarProj.png';
import TextEditor from '../img/TextEditor.png';


class Projects extends Component {
    render() {
        return (
            <div className="condiv">
            <a href="https://amdiebolt.github.io/trip-planner/">
                 <img src={TripPlanner} alt="TripPlanner" className="projectPic"></img></a>
                 <br></br>
             <a href="https://infinite-ravine-51041.herokuapp.com/">
                 <img src={GeekSeek} alt="GeekSeek" className="projectPic"></img></a>
                 <br></br>
            <a href="https://teeteathao.github.io/password--generator/">
                 <img src={PasswordGen} alt="PasswordGen" className="projectPic"></img></a>
                 <br></br>
            <a href="https://teeteathao.github.io/API-Scheduler/">
                 <img src={CalendarProj} alt="CalendarProj" className="projectPic"></img></a>
                 <br></br>
            <a href="https://https://github.com/teeteathao/text-editor/">
                 <img src={TextEditor} alt="TextEditor" className="projectPic"></img></a>
            </div>
            )
        }
    }
    
export default Projects
    