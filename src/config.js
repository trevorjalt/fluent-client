let apiPath
let tokenKey

if (process.env.NODE_ENV === 'production') {
    apiPath = process.env.API_ENDPOINT
    tokenKey = process.env.TOKEN_KEY
} else {
    apiPath = 'http://localhost:8000/api'
    tokenKey = process.env.TOKEN_KEY
}

export default {
    API_ENDPOINT: apiPath,
    TOKEN_KEY: tokenKey,
}