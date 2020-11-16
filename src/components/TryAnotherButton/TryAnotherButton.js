import React, { Component } from 'react'
import Button from '../Button/Button'
import LanguageContext from '../../contexts/LanguageContext'
import './TryAnotherButton.css'

class TryAnotherButton extends Component {
    static contextType = LanguageContext

    handleClickNext = ev => {
        ev.preventDefault()
        let { response, setNextWord, setResponseReceived, setSubmit } = this.context
        response = response.response

        setNextWord({
            nextWord: response.nextWord,
            wordCorrectCount: response.wordCorrectCount,
            wordIncorrectCount: response.wordIncorrectCount,
            totalScore: response.totalScore
        })

        setResponseReceived()

        setSubmit()
    }

    render() {
        return (      
            <Button 
                type='button'
                className='try-another-word'
                onClick={this.handleClickNext}
            >
                Try another word!
            </Button>
        )
    }
}

export default TryAnotherButton