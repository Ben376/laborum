import React, { Component, Fragment } from 'react';

type Props = {
  changeIdValue: Function,
}

export default class idBar extends Component<Props> {
  props: Props;
  
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
