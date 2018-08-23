import React, { Component, Fragment } from 'react'
import logo from '../images/logo.svg';
import '../App.css';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Commentaries.com</h1>
            </header>
        </div>
      </Fragment>
    )
  }
}
