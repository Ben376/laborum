import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


type Props = {
  handleClickId: Function,
  currentDisplayList: Array<Object>,
}



class RenderList extends Component<Props> {

  static defaultProps = {
    currentDisplayList: [{id: 1, name: 'ben', email: 'ben@ben.fr', body: '...'}],
  }

  render() {
    return (
      <Fragment>
          <Paper className={this.props.classes.root}>
              <Table className={this.props.classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>id</CustomTableCell>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell>Email</CustomTableCell>
                    <CustomTableCell>Body</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.currentDisplayList.map((item,index) => {
                    return (
                      <TableRow 
                      key={`block-${index}`}
                      onClick={() => this.props.handleClickId(item.id)}
                      className={this.props.classes.row}>
                        <CustomTableCell component="th" scope="row">
                        {item.id}
                        </CustomTableCell>
                        <CustomTableCell>{item.name}</CustomTableCell>
                        <CustomTableCell>{item.email}</CustomTableCell>
                        <CustomTableCell>{item.body}</CustomTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
      </Fragment>
    )
  }
}

export default withStyles(styles)(RenderList);
