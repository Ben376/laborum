import React, { Component, Fragment } from 'react';

type Props = {
    handleClickNextPage: Function,
    handleClickPreviouslyPage: Function,
}

export default class Button extends Component<Props> {
    props: Props;
    
  render() {
    return (
        <Fragment>
            <div style={{textAlign: 'center'}} >
                <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => this.props.handleClickPreviouslyPage()}> Prev </Button>
                <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => this.props.handleClickNextPage()} > Next </Button>
            </div>      
        </Fragment>
    )
  }
}
