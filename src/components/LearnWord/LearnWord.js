import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service'
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../Button/Button'
import Correct from '../Correct/Correct'
import Incorrect from '../Incorrect/Incorrect'
import { Input, Label } from '../Form/Form'
import TotalScore from '../TotalScore/TotalScore'
import WordScore from '../WordScore/WordScore'
import './LearnWord.css'

class LearnWord extends Component {
    static contextType = LanguageContext

    state = {
        error: null,
    }

    componentDidMount() {
        LanguageApiService.getLanguageHead()
            .then(res => {
                this.context.setNextWord(res)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    handleGuessSubmit = ev => {
        ev.preventDefault()
        const { guess } = ev.target
        const { setGuess, setResponse, setSubmit} = this.context
        
        LanguageApiService.postGuess(guess.value)
            .then(setGuess(guess.value))
            .then(res => setResponse({ response: res }))
            .then(setSubmit())
    }

    renderLearnWordForm() {
        const { error } = this.state

        return (
            <form
                className='learn-word-form'
                onSubmit={this.handleGuessSubmit}
            >
                <div role='alert' className='error-message'>
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <Label htmlFor='learn-guess-input'>
                        What's the translation for this word?
                    </Label>
                    <Input
                        type='text'
                        id='learn-guess-input'
                        name='guess'
                        required
                        aria-required='true'
                        autocomplete='off'
                    />
                </div>
                <div className='submit-word-guess'>
                    <Button 
                        type='submit'
                        className='submit-your-answer'
                    >
                        Submit your answer
                    </Button>
                </div>
            </form>
        )
    }

    renderLearnWord() {
        const { nextWord } = this.context

        return (
            <div className='translate-header'>  
                <h2 className='translate-the-word'>Translate the word:</h2>
                <span lang='de'><span className='word-to-translate'>{nextWord.nextWord}</span></span>
            </div>
        )
    }

    render() {
        const { submit, isCorrect } = this.context

        return (
            <div>
                <TotalScore />
                {!submit
                    ? this.renderLearnWord()
                    : ''
                }
                {!submit
                    ? this.renderLearnWordForm()
                    : ''
                }
                {submit && isCorrect === false
                    ? <Incorrect />
                    : ''
                }
                {submit && isCorrect === true
                    ? <Correct />
                    : ''
                }
                <WordScore />
            </div>
        )
    }
}

export default LearnWord