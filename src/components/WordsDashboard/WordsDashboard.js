import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service'
import LanguageContext from '../../contexts/LanguageContext'
import './WordsDashboard.css'

class LanguageDashboard extends Component {
    static contextType = LanguageContext

    state = {
        error: null
    }

    componentDidMount() {
        LanguageApiService.getLanguage()
            .then(res => {
                this.context.setWords(res.words)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    renderWordsDashboard() {
        const { words = [] } = this.context
        console.log(words)
        return words.map(word => 
            <li 
                key={word.id} 
                className='words-dashboard'
            >
                <h4>{word.original}</h4>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p>
                <hr />
            </li>
            
        )
    }

    render() {
        const { error } = this.state
        return (
            <div>
                <ul>
                    {this.renderWordsDashboard()}
                </ul>
            </div>
        )
    }
}

export default LanguageDashboard