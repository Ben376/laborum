import React, { Component, Fragment } from 'react';
import PageNumbers from './PageNumbers';

type Props = {
  apiCommentList: Array<Object>,
  itemPerPage: number,
  handleClickPage: Function,
  handleClickNextPage: Function,
  handleClickPreviouslyPage: Function,
}

export default class RenderPagesNumber extends Component<Props> {
  props: Props;

  static defaultProps = {
    apiCommentList: [{id: 1, name: 'ben', email: 'ben@ben.fr', body: '...'}],
    itemPerPage: 20,
  }

  render() {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.apiCommentList.length / this.props.itemPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <Fragment>
            <PageNumbers 
            pageNumbers= {pageNumbers} 
            handleClickPage={this.props.handleClickPage.bind(this)} 
            />

            <button onClick={this.props.handleClickPreviouslyPage}> Previously </button>
            <button onClick={this.props.handleClickNextPage} > Next </button>
        </Fragment>
    )
  }
}
