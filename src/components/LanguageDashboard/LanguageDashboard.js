import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service'
import LanguageContext from '../../contexts/LanguageContext'
import './LanguageDashboard.css'

class LanguageDashboard extends Component {
    static contextType = LanguageContext

    state = {
        error: null
    }

    componentDidMount() {
        LanguageApiService.getLanguage()
            .then(res => {
                this.context.setLanguage(res.language)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    renderLanguageDashboard() {
        const { error } = this.state
        const { language } = this.context

        return (
            <div className='language-dashboard'>
                <div className='language-dashboard-top'>
                <h2 className='language-dashboard-title'>Current Language: {language.name}</h2>
                </div>
                <p className='language-dashboard-total'>Total correct answers: {language.total_score}</p>   
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderLanguageDashboard()}
            </div>
        )
    }
}

export default LanguageDashboard