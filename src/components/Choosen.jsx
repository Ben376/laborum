import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

type Props = {
  id: Object,
}

class Choosen extends Component<Props> {
  props: Props;

  render() {      
    return (
      <Fragment>
        <h4> Chosen one </h4>
        <div style={{border: '2px solid black', padding: '5px', display: 'block', margin: '5px'}} >
                <p> id: {this.props.id.id} </p>
                <p> title: {this.props.id.title} </p>
                <p> text: {this.props.id.body} </p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  id: state.reducerUserId.userId,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choosen);

