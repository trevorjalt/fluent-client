import React, { Component } from 'react'
import Button from '../Button/Button'
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
                    <p>The correct translation for {nextWord.nextWord} was {response.answer} and you chose {guess}!</p>
                </div>
                <footer>
                    <Button 
                        type='button'
                        className='try-another-word'
                    >
                        Try another word!
                    </Button>
                </footer>
            </div>
        )

    }
}

export default Incorrect