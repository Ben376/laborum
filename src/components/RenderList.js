import React, { Component, Fragment } from 'react';

type Props = {
  handleClickId: Function,
  currentDisplayList: Array<Object>,
}

export default class RenderList extends Component<Props> {
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
