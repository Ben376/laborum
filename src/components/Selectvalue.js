import React, { Component, Fragment } from 'react';

type Props = {
  handleChange: Function,
}

export default class SelectValue extends Component<Props> {
  props: Props;

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
