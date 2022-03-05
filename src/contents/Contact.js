import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {

    render() {
        return (
            <div className="condiv form">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Your Name" />
                <br></br>
                <input type="email" placeholder="Your email address" />
                <br></br>
                <textarea placeholder="Your message"></textarea>
                 <br></br>
                 <button>Send Message</button>
                <Social />
            </div>
        )
    }
}

export default Contact
