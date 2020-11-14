import React, { Component } from 'react'
import TryAnotherButton from '../TryAnotherButton/TryAnotherButton'
import LanguageContext from '../../contexts/LanguageContext'
import './Correct.css'

class Correct extends Component {
    static contextType = LanguageContext

    render() {
        let { nextWord, response, guess } = this.context
        response = response.response

        return (
            <div className='Correct-wrapper'>
                <h2 className='Correct-response'>You were correct! :D</h2>
                <div className='DisplayFeedback'>
                    <p>The correct translation for <span className='blue bold'>{nextWord.nextWord}</span> was <span className='green'>{response.answer}</span> and you chose <span className='green'>{guess}!</span></p>
                </div>
                <footer>
                    <TryAnotherButton />
                </footer>
            </div>
        )
    }
}

export default Correct