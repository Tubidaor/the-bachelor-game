import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login-form.css'
// import { AuthServices, InventoryServices, ShopListServices, TokenServices } from '../../services/services'
// import Error from '../error/error'

export default class Login extends Component {

  // componentWillUnmount() {
  //   this.props.clearError("login")
  // }

  // handleLoginJwtAuth = (e) => {
  //   e.preventDefault()
  //   const { email, password } = e.target
  //   const credentials = {
  //     email: email.value,
  //     password: password.value
  //   }
  //   AuthServices.login(credentials)
  //     .then(res => {
  //         email.value = ''
  //         password.value = ''
  //         TokenServices.saveAuthToken(res.authToken)
  //     }
  //     )
  //     .then(token => 
  //       InventoryServices.getInventory()
  //         .then(inventory => {
  //             this.props.loadInventory(inventory)
  //         })
  //         .catch(e => this.props.handleError("inventory", e.error))
  //     )
  //     .then(res =>
  //       ShopListServices.getShoppingList()
  //         .then(list =>
  //             this.props.loadShoppingList(list)
  //       )
  //       .catch(e => this.props.handleError("shopping", e.error))
  //     )
  //     .then(res =>
  //       this.props.handleLoginSuccess()
  //     )
  //     .catch(e => 
  //       this.props.handleError("login", e.error)
  //     )
  // }

  render() {
    // const { error } = this.props

    return (
        <form className="loginForm" onSubmit={this.handleLoginJwtAuth}>
          <div className="loginForm233">
            <h2 className="loginH2">Login</h2>
            {/* {error && <Error error={error}/>} */}
            <div className="email">
              <label className="loginLabel" htmlFor="loginForm_email">
                Email
              </label>
              <input
                name="email"
                id="loginForm_email"
                type="text"
                aria-label="Enter email to login"
                aria-required="true"
                aria-describedby="errorMessage"
              >
              </input>
            </div>
            <div className="password">
              <label  className="loginLabel" htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                aria-label="Enter password to login"
                aria-required="true"
                aria-describedby="errorMessage"
              >
              </input>
            </div>
          </div>
          <button className="loginButton" type="submit">Login</button>
          <Link className="login-link-to-reg" to="/register">Not a User? Sign up</Link>
        </form>
    )
  }
}