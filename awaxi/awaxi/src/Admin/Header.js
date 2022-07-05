import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import nurse from "../Assets/Nurse.png";
import {
  Card,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Grid,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minWidth: 275,
  //   minHeight: 685,
  //   borderRadius: 15,
  //   marginTop: 20,
  //   marginBottom: 25,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   backgroundColor: "#AFADDE",
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  header: {
    backgroundColor: "white",
    width: "100%",
    // marginTop: 20,
    // marginLeft: "23%",
    // marginRight: 20,
    borderRadius: 40,
    backgroundColor: "#AFADDE",
  },
  picture: {
    width: 50,
    height: 50,
  },
  nurse: {
    display : "flex",
    // marginLeft: 700,
    width: 50,
    height: 50,
    marginLeft:"68%",
  },
  space:{
flex: 1,
  },
  image: {
    marginTop: 10,
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  text: {
    // marginLeft: 10,
    fontSize: 20,
    // marginTop: 20,
    // marginBottom: 20,
    fontFamily: ["Chronicle Display Black"].join(","),
    color: "#393F5F",
    // width: "100%",
  },
}));


export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [data, setData] = React.useState();
  const history = useNavigate();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    history("/");
  };

  const handleLogout = () =>{
    localStorage.removeItem("user-info")
    history("/")
  }

  return (
    <Grid container style={{ padding: "1em 5em 0 1.5em" }}>
      <Toolbar className={classes.header}>
        {/* <img src={awaxi} alt="awaxi" className={classes.picture}></img> */}
        <Typography className={classes.text}> Dashboard</Typography>
        <div className={classes.space}></div>
        <img src={nurse} alt="nurse" className={classes.nurse}></img>
        <div className={classes.space}></div>
        <Typography className={classes.text}>Hello Admin</Typography>
        {/* <ArrowDropDownIcon
                  onClick={handleMenu}

            > className={classes.icon} </ArrowDropDownIcon> */}

        {auth && (
          <div>
            <ArrowDropDownIcon
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </ArrowDropDownIcon>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </Grid>
  );
}