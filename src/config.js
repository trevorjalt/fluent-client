let apiPath
let tokenKey

if (process.env.NODE_ENV === 'production') {
    apiPath = 'https://fluent-app-api.herokuapp.com/api'
    tokenKey = 'fluent-client-auth-token'
} else {
    apiPath = 'http://localhost:8000/api'
    tokenKey = 'fluent-client-auth-token'
}

export default {
    API_ENDPOINT: apiPath,
    TOKEN_KEY: tokenKey,
}