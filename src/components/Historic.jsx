import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type Props = {
  persistData: Array<Object>,
};

class Historic extends Component<Props> {
  render() {
    return (
      <Fragment>
        <h4> List of chosen items </h4>
         <div> 
            { this.props.persistData.map(stored =>
           <div key={ stored.id } >
              <p> { stored.id } </p>
              <p> { stored.title } </p>
              <p> { stored.body } </p>
          </div>
          ) } 
        </div> 
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  persistData: state.persistIdDisplay,
});

export default connect(mapStateToProps)(Historic);
