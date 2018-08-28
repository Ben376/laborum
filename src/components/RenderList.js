import React, { Component, Fragment } from 'react';

export default class RenderList extends Component {
  render() {
    return (
      <Fragment>
            <ul>
                {this.props.currentDisplayList.map((item, index) => {
                        return <div 
                        key={`block-${index}`}
                        onClick={() => this.props.handleClickId(item.id)}
                        >
                        <li>{item.id}</li>
                        <p>{item.name}</p>
                        <b>{item.email}</b>
                        <p>{item.body}</p>
                        </div>;
                })}
            </ul>
      </Fragment>
    )
  }
}
