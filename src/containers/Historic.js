import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type Props = {
  persistData: Array<Object>,
};

class Historic extends Component<Props> {
  props:Props;

  static defaultProps = {
    persistData: [{id: 1, title: 'none', body: '...'}],
  }

  render() {
    return (
      <Fragment>
        <h4> List of chosen items </h4>
         <div> 
            { this.props.persistData.map(stored =>
           <div 
           style={{border: '1px solid black', margin: '5px', padding:'5px'}}
           key={ `persistId-${ stored.id }` } >
              <b> { stored.id } </b>
              <p><b>Title:</b> { stored.title } </p>
              <p><b>Text:</b> { stored.body } </p>
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
