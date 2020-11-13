import config from '../config'
import TokenService from './token-service'

const LanguageApiService = {
    getLanguage() {
        return fetch (`${config.API_ENDPOINT}/language`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },            
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    getLanguageHead() {
        return fetch (`${config.API_ENDPOINT}/language/head`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },            
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    postGuess(guess) {
        return fetch (`${config.API_ENDPOINT}/language/guess`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }, 
            body: JSON.stringify({
                guess
            }) 
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },
}

export default LanguageApiService