import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Home extends Component {

handleClick (id) {
  this.props.actions.getIdUser(id);
  this.props.history.push('/Choosen');
}

  render() {

      const API = 'https://jsonplaceholder.typicode.com/comments';
    
      return (
      <Fragment>
        <h3> Click on the button below to display the comments: </h3>
        <button onClick={ () => this.props.actions.fetchingDisplayData(API) } > here </button>
        
      <ReactTable
                getTdProps={(state, rowInfo) => {
                  return {
                    onClick: () => {
                      this.handleClick(rowInfo.original.id)
                    }
                  };
                }}
                data={this.props.commentsList}
                previousText='Previously'
                nextText='Next'
                loadingText='Loading..'
                noDataText='Nothing found'
                pageText='Page'
                ofText='of'
                columns={[
                  {
                    Header: "",
                    columns: [
                      {
                        Header: "Name",
                        accessor: "name",
                        Cell: row => (
                          <div style={{
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            fontWeight: 'bold'
                          }}>
                            {row.value}
                          </div>
                        )
                      }
                    ]
                  },
                  {
                    Header: "",
                    columns: [
                      {
                        Header: "Email",
                        accessor: "email",
                        Cell: row => (
                          <div>
                            {row.value}
                          </div>
                        )
                      },
                      {
                        Header: "Text",
                        accessor: "body",
                        Cell: row => (
                          <div>
                            {row.value}
                          </div>
                        )
                      }
                    ]
                  }
                ]}
                defaultPageSize={20}
                className="-striped -highlight"
              />

      </Fragment>
      
    )
  }
}

const mapStateToProps = state =>({
    commentsList: state.data,
    id: state.id,
  });
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
