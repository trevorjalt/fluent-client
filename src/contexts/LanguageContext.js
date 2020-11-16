import React, { Component } from 'react'

const LanguageContext = React.createContext({
    guess: '',
    nextUp: '',
    language: {},
    nextWord: {},
    response: {},
    correct: 0,
    incorrect: 0,
    totalScore: 0,
    words: [],
    isCorrect: null,
    responseReceived: null,
    submit: null,
    setGuess: () => {},
    setLanguage: () => {},
    setNextWord: () => {},
    setResponse: () => {},
    setResponseReceived: () => {},
    setSubmit: () => {},
    setWords: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
    state = {
        guess: '',
        nextUp: '',
        language: {},
        nextWord: {},
        response: {},
        correct: 0,
        incorrect: 0,
        totalScore: 0,
        words: [],
        isCorrect: null,
        responseReceived: null,
        submit: null,
    }

    setGuess = guess => {
        this.setState({ guess })
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setNextWord = nextWord => {
        this.setState({ 
            nextWord,
            correct: nextWord.wordCorrectCount,
            incorrect: nextWord.wordIncorrectCount,
            totalScore: nextWord.totalScore, 
        })
    }

    setResponse = response => {
        this.setState({ 
            response,
            nextUp: response.response.nextWord,
            correct: response.response.wordCorrectCount,
            incorrect: response.response.wordIncorrectCount,
            isCorrect: response.response.isCorrect,
            totalScore: response.response.totalScore  
        })
    }

    setResponseReceived = () => {
        this.setState({ responseReceived: !this.state.responseReceived})
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
            incorrect: this.state.incorrect,
            isCorrect: this.state.isCorrect,
            language: this.state.language,
            nextUp: this.state.nextUp,
            nextWord: this.state.nextWord,
            response: this.state.response,
            responseReceived: this.state.responseReceived,
            submit: this.state.submit,
            totalScore: this.state.totalScore,
            words: this.state.words,
            setGuess: this.setGuess,
            setLanguage: this.setLanguage,
            setNextWord: this.setNextWord,
            setResponse: this.setResponse,
            setResponseReceived: this.setResponseReceived,
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