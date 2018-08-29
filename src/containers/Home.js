import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

/* import ReactTable from "react-table";
   import "react-table/react-table.css";
 */

import Renderlist from '../components/RenderList';
import SelectValue from '../components/Selectvalue';
import RenderPagesNumber from '../components/RenderPagesNumber';

type Props = {
  actions: Object,
  history: Object,
  apiCommentList: Array<Object>,
};

type State = {
  currentPage: number,
  itemPerPage: number,
};

class Home extends Component<Props, State> {
  props: Props;
  state: State;

  static defaultProps = {
    apiCommentList: [{id: 1, name: 'none', email: 'none', body: '...'}],
  }

    state = {
      currentPage: 1,
      itemPerPage: 20,
    };

componentDidMount () {
  this.props.actions.fetchRequest();  
 }

/*  handleClick (id) {   
  this.props.actions.getIdUser(id);  
  this.props.history.push('/Choosen');
}  */

handleClickId (id) {   
  this.props.actions.getIdUser(id);  
  this.props.history.push('/Choosen');
} 

handleClickPage(event) {
  this.setState({
    currentPage: Number(event.target.id),
  });
}

handleClickNextPage() {
  const currentPageCopy = this.state.currentPage;
  this.setState({
    currentPage: currentPageCopy + 1,
  });
}

handleClickPreviouslyPage() {
  let currentPageCopy = '';

  this.state.currentPage > 1 ? 
  currentPageCopy = this.state.currentPage - 1 :
  currentPageCopy = 1;

  this.setState({
    currentPage: currentPageCopy,
  });
}

handleChange (event) {
  this.setState(
  {[event.target.name] : event.target.value});

  this.setState({
    itemPerPage: event.target.value,
  });
}

render() {
    const { apiCommentList } = this.props;
    const { currentPage, itemPerPage } = this.state;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentDisplayList = apiCommentList.slice(indexOfFirstItem, indexOfLastItem);

      return (
      <Fragment>
            <Renderlist 
            handleClickId={ this.handleClickId.bind(this) } 
            currentDisplayList={ currentDisplayList } />

            <SelectValue 
            handleChange={this.handleChange.bind(this)} />
            
            <RenderPagesNumber 
            apiCommentList = { this.props.apiCommentList } 
            itemPerPage  = { this.state.itemPerPage }
            handleClickPage = { this.handleClickPage.bind(this) }
            handleClickPreviouslyPage = { this.handleClickPreviouslyPage.bind(this) }
            handleClickNextPage = { this.handleClickNextPage.bind(this) }
            />

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
    apiCommentList: state.reducerFetchDisplay.data,
  });
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
