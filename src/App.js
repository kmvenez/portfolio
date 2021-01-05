import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'

import Portfolio from './components/Portfolio/Portfolio'
import About from './About'
import Home from './Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}

        <main className="container">
          <Route path='/portfolio' render={() => (
            <Portfolio msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/about' render={() => (
            <About msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route exact path='/' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
        </main>

      </Fragment>
    )
  }
}

export default App
