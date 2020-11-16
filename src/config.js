let apiPath
let tokenKey

if (process.env.NODE_ENV === 'production') {
    apiPath = 'https://git.heroku.com/fluent-app-api.git/api'
    tokenKey = 'fluent-client-auth-token'
} else {
    apiPath = 'http://localhost:8000/api'
    tokenKey = 'fluent-client-auth-token'
}

export default {
    API_ENDPOINT: apiPath,
    TOKEN_KEY: tokenKey,
}