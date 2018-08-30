import React, { Component, Fragment } from 'react'

export default class idBar extends Component {
  render() {
    return (
      <Fragment>
        <div style={{textAlign: 'center'}} >
            <label style={{display:'block', margin: '10px'}} > 
              Search by id's reference 
            </label>
            <input type='search' placeholder='id'
            onChange={event => this.props.changeIdValue(event.target.value)}
            /> 
        </div>      
        </Fragment>
    )
  }
}
