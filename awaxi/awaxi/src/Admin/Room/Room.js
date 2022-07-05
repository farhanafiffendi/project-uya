import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  Card,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
} from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import { alpha, lighten, makeStyles } from "@material-ui/core/styles";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { useEffect, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: true,
    disablePadding: true,
    label: "Room Name",
    
  },

  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Room Type",
  },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function EnhancedTableHead(props) {
  const {
    classes,
    // onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "center" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: "1 1 100%",
  },


}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  const history = useNavigate();

  const handleChangeAddPatient = (e) => {
    e.preventDefault();
    history("/addRoom");
    console.log(e);
  };

  //   const classess = makeStyles();
  const { numSelected } = props;
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          style={{
            fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
            color: "#64789B",
            fontSize: "40px",
            fontStyle: "bold",
            marginTop: "10px",
            flex: "1 1 100%",
          }}
        >
          Room
        </Typography>
      )}
      <div className={classes.search}>
        {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div>
        <Button onClick={handleChangeAddPatient}>
          <AddCircleOutlinedIcon />
        </Button>
      </div>


    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 350,
    minHeight: 750,
    borderRadius: 0,
    backgroundColor: "white",
  },
  card: {
    flex: 1,
    width: "99%",
    height: "600px",
    outline: "none",

    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  inputRoot: {
    color: "inherit",
  },
}));

export default function Admin() {
  const history = useNavigate();
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === "asc";
  //   setOrder(isAsc ? "desc" : "asc");
  //   setOrderBy(property);
  // };

  useEffect(() => {
    fetch("https://awaxii.pocari.id/dev/web_room?key=all")
      .then((res) => res.json())
      .then((json) => {
        setData({
          result: json,
          DataisLoaded: true,
        });
      }); 
    // getPostById();
  }, []);

  // const getPostById = (e, id) => {
  //   axios
  //     .get(`https://awaxii.pocari.id/dev/web_room/${id}`) // <-- remove ;
  //     .then((res) => {
  //       const user = res.data.data;
  //       console.log(res);
  //       history("/EditPatient");
  //       console.log(user);

  //       setPatientName(user.PatientName);
  //     });
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangeHapusRoom = (e, id) => {
    e.preventDefault();

  
    axios
      .post(`https://awaxii.pocari.id/dev/web_room/delete/${id}`) // <-- remove ;
      .then((res) => {
        // const users = res.data.data;
        // this.setState({ users });
        console.log("Hapus Room");
        // console.log(users);
        setOpen(true);

        const temp = [...data.result.result];
        console.log(typeof data);
        const index = temp.findIndex((el) => el.id == id);
        temp.splice(index, 1);
        const obj = Object.assign({}, data);
        obj.result.result = temp;
        setData(obj);
      });

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
  rowsPerPage -
  Math.min(
    rowsPerPage,
    data?.result?.result?.length - page * rowsPerPage
  );

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Header />
          <Grid container style={{ padding: "1em 5em 0em 1.5em" }}>
            <Card className={classes.card}>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <EnhancedTableToolbar numSelected={selected.length} />
                  <TableContainer>
                    <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      size={dense ? "small" : "medium"}
                      aria-label="enhanced table"
                    >
                      <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        // onSelectAllClick={handleSelectAllClick}
                        rowCount={
                          data?.result?.result?.length
                        }
                      />
                      
                      <TableBody>
                        {(data?.result?.result || [])
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => {
                            const isItemSelected = isSelected(row.name);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                              <TableRow hover>
                                <TableCell padding="checkbox">
                                  {/* <Checkbox
                                    checked={isItemSelected}
                                    inputProps={{ "aria-labelledby": labelId }}
                                  /> */}
                                </TableCell>
                                <TableCell
                                  component="th"
                                  id={labelId}
                                  scope="row"
                                  padding="2"
                                  align="left"
                                >
                                  {row.room_name}
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  padding="2"
                                  align="left"
                                >
                                  {row.room_type}
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  padding="2"
                                  align="center"
                                >
                                  {row.status}
                                  <Link to={`/EditRoom/${row.key}`}>
                                    <CreateRoundedIcon />
                                  </Link>
                                  <Button
                                    style={{ marginTop: "-6%" , color: "#c62828"}}
                                    onClick={(e) => {
                                      handleChangeHapusRoom(e, row.key);
                                    }}
                                  >
                                    <DeleteRoundedIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{ height: (dense ? 33 : 53) * emptyRows }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOp tions={[5, 10, 25]}
                    component="div"
                    count={
                      data?.result?.result?.length

                    }
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
                {/* <FormControlLabel
                  control={
                    <Switch checked={dense} onChange={handleChangeDense} />
                  }
                  label="Dense padding"
                /> */}
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Data Berhasil di Hapus
        </Alert>
      </Snackbar>


    </Card>
  );
}