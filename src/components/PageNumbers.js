import React, { Component, Fragment } from 'react';

type Props = {
  pageNumbers: Array<number>,
  handleClickPage: Function,
};

export default class PageNumbers extends Component<Props> {
  props: Props;

  static defaultProps = {
    pageNumbers: [1],
  }
  
  render() {
    const renderPageNumbers = this.props.pageNumbers.map(number => {     
        return (
          <li
            key={ number }
            id={ number }
            style={{
              marginRight: '0.8em',
              color: 'blue',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onClick={ (event) => this.props.handleClickPage(event) }
          >
            { number }
          </li>
        );
      });

    return (
      <Fragment>
            <ul 
            style={{
              listStyle: 'none',
              display: 'flex',
            }}
            id="page-numbers">
              { renderPageNumbers }
            </ul> 
        </Fragment>
    )
  }
}
