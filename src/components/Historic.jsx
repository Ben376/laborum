// @flow


import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

type Props = {
  persistData: Object,
};

class Historic extends Component<Props> {
 
  render() {
   
    return (
      <Fragment>
        <h4> List of chosen items </h4>
         <div> 
            { this.props.persistData.map(stored =>
           <div key={stored.id} >
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

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Historic);
