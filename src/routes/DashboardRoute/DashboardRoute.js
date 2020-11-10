import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import LanguageDashboard from '../../components/LanguageDashboard/LanguageDashboard'
import WordsDashboard from '../../components/WordsDashboard/WordsDashboard'
import './DashboardRoute.css'

class DashboardRoute extends Component {
    static contextType = UserContext

    renderStartPracticing() {
        return (
            <span className='practice-button'>
                <Link to='/learn' className='practice-link'>Start practicing</Link>
            </span>
        )
    }
    
    render() {

        return (
            <section className='dashboard-route'>
                <span className='dashboard-welcome'>Welcome <span className='welcome-blue'>{this.context.user.name}</span>.</span>
                <LanguageDashboard />
                {this.renderStartPracticing()}
                <h3>Words to practice</h3>
                <WordsDashboard />
            </section>
        )
    }
}

export default DashboardRoute
