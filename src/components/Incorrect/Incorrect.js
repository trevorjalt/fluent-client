import React, { Component } from 'react'
import TryAnotherButton from '../TryAnotherButton/TryAnotherButton'
import LanguageContext from '../../contexts/LanguageContext'
import './Incorrect.css'

class Incorrect extends Component {
    static contextType = LanguageContext

    render() {
        let { nextWord, response, guess } = this.context
        response = response.response

        return (
            <div className='incorrect-wrapper'>
                <h2 className='incorrect-response'>Good try, but not quite right :(</h2>
                <div className='DisplayFeedback'>
                    <p>The correct translation for <span lang='de'><span className='blue bold'>{nextWord.nextWord}</span></span> was <span className='green'>{response.answer}</span> and you chose <span className='red'>{guess}!</span></p>
                </div>
                <div className='next-word-button'>
                    <TryAnotherButton />
                </div>
            </div>
        )
    }
}

export default Incorrect