import React, { Component } from 'react'

const LanguageContext = React.createContext({
    guess: '',
    language: {},
    nextWord: {},
    response: {},
    correct: 0,
    incorrect: 0,
    totalScore: 0,
    words: [],
    isCorrect: null,
    submit: null,
    setGuess: () => {},
    setLanguage: () => {},
    setNextWord: () => {},
    setResponse: () => {},
    setSubmit: () => {},
    setWords: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
    state = {
        guess: '',
        language: {},
        nextWord: {},
        response: {},
        correct: 0,
        incorrect: 0,
        totalScore: 0,
        words: [],
        isCorrect: null,
        submit: null,
    }

    setGuess = guess => {
        this.setState({ guess })
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setNextWord = nextWord => {
        console.log(nextWord)
        this.setState({ 
            nextWord,
            correct: nextWord.wordCorrectCount,
            incorrect: nextWord.wordIncorrectCount,
            totalScore: nextWord.totalScore 
        })
    }

    setResponse = response => {
        console.log(response)
        this.setState({ 
            response,
            correct: response.response.wordCorrectCount,
            incorrect: response.response.wordIncorrectCount,
            isCorrect: response.response.isCorrect,
            totalScore: response.response.totalScore  
        })
    }

    setSubmit = () => {
        this.setState({ submit: !this.state.submit })
    }

    setWords = words => {
        this.setState({ words })
    }

    render() {
        const value = {
            correct: this.state.correct,
            guess: this.state.guess,
            incorrect: this.state.correct,
            isCorrect: this.state.isCorrect,
            language: this.state.language,
            nextWord: this.state.nextWord,
            response: this.state.response,
            submit: this.state.submit,
            totalScore: this.state.totalScore,
            words: this.state.words,
            setGuess: this.setGuess,
            setLanguage: this.setLanguage,
            setNextWord: this.setNextWord,
            setResponse: this.setResponse,
            setSubmit: this.setSubmit,
            setWords: this.setWords,
        }
        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}