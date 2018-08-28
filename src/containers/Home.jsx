import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import ReactTable from "react-table";
import "react-table/react-table.css";

type Props = {
  actions: Function,
  history: Object,
  apiCommentList: Array<Object>,
};

class Home extends Component<Props> {
  props: Props;

    state = {
      currentPage: 1,
      itemPerPage: 20,
    };


componentDidMount () {
  this.props.actions.fetchRequest();  
 }

 handleClickId (id) {   
  this.props.actions.getIdUser(id);  
  this.props.history.push('/Choosen');
} 


handleClickPage(event) {
  this.setState({
    currentPage: Number(event.target.id),
  });
}

  render() {
    const { apiCommentList } = this.props;
    const { currentPage, itemPerPage } = this.state;

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentDisplayList = apiCommentList.slice(indexOfFirstItem, indexOfLastItem);

    const renderList = currentDisplayList.map((item, index) => {
      return <div 
      key={`block-${index}`}
      onClick={() => this.handleClickId(item.id)}
      >
      <li key={`id-${index}`}>{item.id}</li>
      <p key={`name-${index}`}>{item.name}</p>
      <b key={`email-${index}`}>{item.email}</b>
      <p key={`body-${index}`}>{item.body}</p>

      </div>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(apiCommentList.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {     
      return (
        <li
          key={number}
          id={number}
          style={{
            marginRight: '0.3em',
            color: 'blue',
            userSelect: 'none',
            cursor: 'pointer',
            margin: '10px',
          }}
          onClick={(event) => this.handleClickPage(event)}
        >
          {number}
        </li>
      );
    });

      return (
      <Fragment>

        <div>
            <ul>
              {renderList}
            </ul>
            <ul 
            style={{
              listStyle: 'none',
              display: 'flex',
            }}
            id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>


     {/*  <ReactTable
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
              /> */}
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
    apiCommentList: state.reducer.data,
  });
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
