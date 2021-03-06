import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <AppBar position="static" color="secondary" >
            <Toolbar variant='dense' >
                <Typography variant="title" color="primary">
                    <ul style={{listStyleType: 'none'}} >
                        <li><NavLink exact to="/" > Home </NavLink></li>
                        <li><NavLink to="/Choosen" activeStyle={{fontWeight: 'bold', color: 'white'}}> Choosen Item </NavLink></li>
                        <li><NavLink to="/Historic" activeStyle={{fontWeight: 'bold', color: 'white'}}> Historic items </NavLink></li>
                    </ul>
                </Typography>
                <div style={{marginLeft: '30%'}} >
                <h1> Commentaries.com </h1>
                </div>
            </Toolbar>
        </AppBar>
        
        </div>
        
      </Fragment>
    )
  }
}
