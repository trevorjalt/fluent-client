import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import Logo from './images/fluent-logo-icon.png'
import User from './images/fluent-user-icon.png'
import './Header.css'

class Header extends Component {
    static contextType = UserContext

    state = {
        navMenu: true,
    }

    handleKeyPressed = event => {
        if (event.key === 'Enter') {
            this.handleNavClick()
        }
    }

    handleNavClick = () => {
        this.setState({ navMenu: !this.state.navMenu })
    }

    handleLogoutClick = () => {
        this.context.processLogout()
    }

    renderLogoutLink() {
        return (
            <div>
                <span className='username-item'>
                    <span className='username'>
                        {this.context.user.name}
                        <img src={User} alt='fluent user logo' className='user-icon' />
                    </span>
                </span>
                <nav role='navigation'>
                    <span className='navigation-item'>
                        <Link
                            onClick={this.handleLogoutClick}
                            to='/login'
                            className='navigation-link'>
                            Logout
                        </Link>
                    </span>
                </nav>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <nav role='navigation'>
                <span className='navigation-item'>
                    <Link to='/login' className='navigation-link'>Login</Link>
                </span>
                <span className='navigation-item'>
                    <Link to='/register' className='navigation-link'>Sign up</Link>
                </span>
            </nav>
        )
    }

    renderNavIcon() {
        if (this.state.navMenu === false) {
            return (
                <div 
                    className='navigation-icon' 
                    onClick={this.handleNavClick}
                    onKeyDown={this.handleKeyPressed} 
                    tabIndex='0'
                    role='button'
                    aria-label='navigation-menu-clickable'
                    aria-expanded='false'
                >
                    <span className='navigation-stripe-top navigation-stripe' />
                    <span className='nagivation-stripe-middle navigation-stripe' />
                    <span className='navigation-stripe-bottom navigation-stripe' />
                </div>
            )
        }
        return (
            <div 
                className='navigation-icon' 
                onClick={this.handleNavClick}
                onKeyDown={this.handleKeyPressed} 
                tabIndex='0'
                role='button'
                aria-label='navigation-menu-clickable'
                aria-expanded='true'
            >
                <span className='navigation-stripe-top navigation-stripe-top-open navigation-stripe' />
                <span className='navigation-stripe-bottom navigation-stripe-bottom-open navigation-stripe' />
            </div>
        )
    }

    renderNavMenu() {
        if (this.state.navMenu === true) {
            return (
                <div
                    aria-live='assertive'
                    aria-relevant='all'
                >
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </div>
            )
        }
    }

    render() {
        return (
            <header role='banner'>
                <div className='Header'>
                    <h1>
                        <img src={Logo} alt='fluent logo' className='logo-icon' />
                        <Link to='/' className='logo'>
                            fluent
                            <div>
                            <span className='logo-small'>Spaced repetition</span>
                            </div> 
                        </Link>
                    </h1>
                    {this.renderNavIcon()}
                </div>
                <div>
                    {this.renderNavMenu()}
                </div>
            </header>
        )
    }
}

export default Header