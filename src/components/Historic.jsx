import React, { Component, Fragment } from 'react'


export default class Historic extends Component {
  constructor(props) {
    super(props);
      this.state={
        savedComment: []
      }
  }

  componentDidMount () {

    let savedCommentCopy = this.state.savedComment;
    for (let i = 0; i < localStorage.length; i++) {
      
      let commentStored = { 
            type: localStorage.key(i), 
            item: localStorage.getItem(localStorage.key(i)) 
      };
      savedCommentCopy.push(commentStored);
    }
  
    this.setState({
      savedComment: savedCommentCopy,
    })
  }
  

  render() {
    
    return (
      <Fragment>
        <h4> List of chosen items </h4>
        <div> 
          { this.state.savedComment.map(stored =>
          <p key={stored.type} > { stored.item } </p>
          ) }
        </div>
      </Fragment>
    )
  }
}
