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
        const { language } = this.context

        return (
            <div className='language-dashboard'>
                <h2 className='language-dashboard-title'>Current Language: <span className='bold-and-brown'>{language.name}</span></h2>
                <p className='language-dashboard-total'>Total correct answers: {language.total_score}</p>   
            </div>
        )
    }

    render() {
        const { error } = this.state

        return (
            <div>
                <div role='alert' className='error-message'>
                    {error && <p>{error}</p>}
                </div>
                {this.renderLanguageDashboard()}
            </div>
        )
    }
}

export default LanguageDashboard