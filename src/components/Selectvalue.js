import React, { Component, Fragment } from 'react';

export default class SelectValue extends Component {
  render() {
    return (
      <Fragment>
            <select name='select' onChange={ this.props.handleChange }>
                <option value='20' > 20 </option>
                <option value='30' > 30 </option>
                <option value='50' > 50 </option>
            </select >      
       </Fragment>
    )
  }
}
