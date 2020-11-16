import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target
        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
        })
            .then(user => {
                name.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='registration-form'
                onSubmit={this.handleSubmit}
            >
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <div className='registration-input'>
                    <Label htmlFor='registration-name-input'>
                        Enter your name<Required />
                    </Label>
                    <Input
                        ref={this.firstInput}
                        id='registration-name-input'
                        name='name'
                        required
                        aria-required='true'
                        autoComplete='name'
                    />
                </div>
                <div className='registration-input'>
                    <Label htmlFor='registration-username-input'>
                        Choose a username<Required />
                    </Label>
                    <Input
                        id='registration-username-input'
                        name='username'
                        required
                        aria-required='true'
                        autoComplete='off'
                    />
                </div>
                <div className='registration-input'>
                    <Label htmlFor='registration-password-input'>
                        Choose a password<Required />
                    </Label>
                    <Input
                        id='registration-password-input'
                        name='password'
                        type='password'
                        required
                        aria-required='true'
                        autoComplete='new-password'
                  />
                </div>
                <div className='registration-input'>
                    <Button type='submit'>
                        Sign up
                    </Button>
                    <Link 
                        to='/login'
                        className='account-link'
                    >
                        Already have an account?
                    </Link>
                </div>
            </form>
        )
    }
}

export default RegistrationForm