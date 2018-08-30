import React, { Component, Fragment } from 'react';
import Select from '@material-ui/core/Select';

type Props = {
  handleChange: Function,
}

export default class SelectValue extends Component<Props> {
  props: Props;

   render() {
    return (
      <Fragment>
          <div style={{textAlign: 'center'}} >
              <label style={{margin: '10px'}}> Item per page </label>
                  <Select name='select' onChange={ this.props.handleChange }>
                      <option value='20' > 20 </option>
                      <option value='30' > 30 </option>
                      <option value='50' > 50 </option>
                  </Select >  
          </div>    
       </Fragment>
    )
  }
}
