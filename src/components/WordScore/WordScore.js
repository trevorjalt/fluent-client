import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import './WordScore.css'

class WordScore extends Component {
    static contextType = LanguageContext

    render() {
        let { correct, incorrect, nextUp, submit } = this.context

        return (
            <div>
                {submit
                    ? (<div className='next-up'>
                        <span>Next Up: <span className='blue'>{nextUp}</span></span>
                      </div>)
                    : ''
                }
                {!submit
                    ? (<div className='word-score'>
                        <span className='word-score-text'>You have answered this word <span className='bold'>correctly</span> {correct} times.</span>
                      </div>)
                    : ''
                }
                {!submit
                    ? (<div className='word-score'>
                        <span className='word-score-text'>You have answered this word <span className='bold'>incorrectly</span> {incorrect} times.</span>
                      </div>)
                    : ''
                }
            </div>
        )
    }
}

export default WordScore