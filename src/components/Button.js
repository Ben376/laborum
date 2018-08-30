import React, { Component, Fragment } from 'react'

export default class Button extends Component {
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
