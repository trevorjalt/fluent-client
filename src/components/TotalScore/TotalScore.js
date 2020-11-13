import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import './TotalScore.css'

class TotalScore extends Component {
    static contextType = LanguageContext
    
    render() {
        const { totalScore } = this.context
        
            return (
                <div className='DisplayScore'>
                    <p className='score-text'>Your total score is: {totalScore}</p>
                </div>
            )
            
    }
}

export default TotalScore