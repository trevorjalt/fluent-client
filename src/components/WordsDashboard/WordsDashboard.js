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

        return words.map(word => 
            <li 
                key={word.id} 
                className='words-dashboard'
            >
                <span lang='de'><h4>{word.original}</h4></span>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p>
                <hr />
            </li>
            
        )
    }

    render() {
        const { error } = this.state
        return (
            <div className='words-list'>
                <div role='alert' className='error-message'>
                    {error && <p>{error}</p>}
                </div>
                <ul>
                    {this.renderWordsDashboard()}
                </ul>
            </div>
        )
    }
}

export default LanguageDashboard