import React, { Component } from 'react'
import LearnWord from '../../components/LearnWord/LearnWord'
import './LearningRoute.css'

class LearningRoute extends Component {
    state = {
        error: null
    }

    render() {
        let { error } = this.state
        return (
            <section
                aria-live='polite'
                aria-relevant='all'
            >
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <LearnWord />
            </section>
        );
    }
}

export default LearningRoute
