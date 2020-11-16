import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer
                className='Footer'
                role='contentinfo'
            >
                <h3 className= "footer-copy">© Copyright Trevor J Alt. All Rights Reserved.</h3>
            </footer>
        )
    }
}