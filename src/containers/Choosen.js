import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type Props = {
  id: Object,
};

class Choosen extends Component<Props> {
  props: Props;

  static defaultProps = {
    currentDisplayList: [{id: 1, title: 'none', body: '...'}],
  }

  render() {      
    return (
      <Fragment>
        <h4> Chosen one </h4>
        <div style={{
          border: '2px solid black', 
          padding: '5px', 
          display: 'block', 
          margin: '5px'}} 
          >
                <b> {this.props.id.id} </b>
                <p> <b>title:</b> {this.props.id.title} </p>
                <p> <b>text:</b> {this.props.id.body} </p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  id: state.reducerUserId.userId,
});

export default connect(mapStateToProps)(Choosen);

