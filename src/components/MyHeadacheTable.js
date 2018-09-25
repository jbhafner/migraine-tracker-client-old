import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function removeHeadache(user_id, headache_id) {
  console.log(
    "removeHeadache called / user_id:",
    user_id,
    "headache_id",
    headache_id
  );
  this.props.removeHeadache(user_id, headache_id);
}

function MyHeadacheTable(props) {
  const { classes, myHeadaches, removeHeadache } = props;
  console.log("MyHeadacheTable.js / removeHeadache", props.removeHeadache);
  console.log("myHeadaches", props.myHeadaches);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Pain Level</TableCell>
            <TableCell numeric>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {console.log(myHeadaches)}
          {myHeadaches.map(n => {
            return (
              <TableRow key={n._id}>
              <TableCell component="th" scope="row">{n._id}</TableCell>
                <TableCell numeric>{n.date}</TableCell>
                <TableCell numeric>{n.painLevel}</TableCell>
                <TableCell numeric>{n.comment}</TableCell>
                <TableCell numeric>
                  <span>
                    <button
                      onClick={props.removeHeadache.bind(
                        this,
                        n.user._id,
                        n._id
                      )}
                    >
                      X
                    </button>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

MyHeadacheTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyHeadacheTable);

////////////////////////////////////////////
// import ReactTable from "react-table";

// render() {
//    const columns =[{
//       Header: "Purchased",
//       accessor: 'purchDate'
//    }, {
//       Header: "Symbol",
//       accessor: "symbol"
//    }, {
//       Header: "Crypto Name",
//       accessor: "name"
//    }, {
//       Header: "Base Currency",
//       accessor: "baseCurrency"
//    }, {
//       Header: "Price",
//       accessor: "price"
//    }, {
//       Header: "Total",
//       accessor: "total"
//    }]
// }
