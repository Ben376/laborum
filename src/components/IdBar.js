import React, { Component, Fragment } from 'react'

export default class idBar extends Component {
  render() {
    return (
      <Fragment>
            <label style={{display:'block', margin :'10px', padding: '5px'}} > 
              Search by id's reference 
            </label>
            <input type='search' placeholder='id'
            onChange={event => this.props.changeIdValue(event.target.value)}
            />       
        </Fragment>
    )
  }
}
