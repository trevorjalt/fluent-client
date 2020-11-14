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
            <section>
                <div role='alert' className='error-message'>
                    {error && <p>{error}</p>}
                </div>
                <LearnWord />
            </section>
        );
    }
}

export default LearningRoute
