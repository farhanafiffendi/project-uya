import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import awaxi from "../src/Assets/Awaxi.png";
import nurse from "../src/Assets/Nurse.png";
import person from "../src/Assets/Person.png";
import heart from "../src/Assets/Heart.png";
import suhut from "../src/Assets/SuhuT.png";
import suhur from "../src/Assets/SuhuR.png";
import awaxiInformation from "../src/Assets/AwaxiInformation.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  root: {
    minWidth: 275,
    minHeight: 685,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: "#AFADDE",
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  header: {
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
  },
  picture: {
    width: 50,
    height: 50,
  },
  nurse: {
    marginLeft: 900,
    width: 50,
    height: 50,
  },
  image: {
    marginTop: 8,
    marginLeft: 18,
    width: 65,
    height: 65,
  },
  text: {
    fontFamily: [
      'Chronicle Display Black'
    ].join(','),
    marginLeft: 10,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    
    color: '#393F5F',
  },
  textP: {
    fontSize: 10,
  },
  icon: {
    marginLeft: 50,
    marginRight: 20,
  },
  simbol: {
    width: 50,
    height: 50,
    // marginTop: 20,
    marginLeft: 130,
  },
  imageFooter: {
    width: 83,
    height: 95,
    marginTop: '-30px',
    marginLeft: 38,
  },
  title: {
    // marginTop: 10,
    // marginBottom: 10,
    // marginLeft: 40,
    fontFamily: [
      'Alibaba-PuHuiTi-Heavy'
    ].join(','),
    color: '#64789B',
    width: "100%",
    fontSize: 30,
    fontStyle: "bold",
    textAlign: "center",
    // color: theme.palette.purple,
  },
  luar: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 4,
  },
  suhuR: {
    width: 100,
    height: 50,
    marginBottom: "200px",
  },
  paper: {
    flex: 1,
    // width: "200px",
    height: "350px",
    outline: "none",
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  paperB: {
    flex: 1,
    width: "300px",
    height: "200px",
    outline: "none",
    marginLeft: 20,
    marginRitght: 20,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  paperF: {
    flex: 1,
    width: "400px",
    height: "113px",
    outline: "none",
    marginLeft: 23,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
    color: '#393F5F',
  },
  paperFI: {
    flex: 1,
    width: "810px",
    height: "113px",
    outline: "none",
    marginLeft: 20,
    marginRight: -40,
    marginTop: 20,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "absolute",
    overflowY: "auto",
    right: 70,
    color: '#393F5F',
  },
  card: {
    width: "100%",
    height: "80px",
    outline: "none",
    // marginLeft: 20,
    // marginRitght: 20,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "#E6E6F4",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(1),
    // paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  cardI: {
    width: "100%",
    height: "80px",
    outline: "none",
    // marginLeft: 20,
    // marginRitght: 20,
    // marginTop: 5,
    // marginBottom: 10,
    backgroundColor: "#E6E6F4",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(1),
    // paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  ImageFooter: {
    marginTop: "-20px",
    width: "60px",
    height: "50px",
    // marginLeft:'40px'
  },
  pasien: {
    marginTop: "3px",
    fontSize: 15,
    fontFamily: [
      'Alibaba-PuHuiTi-regular'
    ].join(','),
    color: '#393F5F',
    width: "100%",
    marginLeft: "4%",
  },
  pasien2: {
    marginBottom: "3px",
    fontSize: 15,
    fontFamily: [
      'Alibaba-PuHuiTi-regular'
    ].join(','),
    color: '#393F5F',
    width: "100%",
    marginLeft: "4%",
    marginTop: '-10px',
  },
  pasien3: {
    // marginBottom: "3px",
    fontSize: 10,
    fontFamily: [
      'Alibaba-PuHuiTi-regular'
    ].join(','),
    color: '#393F5F',
    width: "15%",
    marginLeft: "80%",
    marginTop: '-25px',
  },
  title2: {
    marginTop: "3px",
    fontSize: 15,
    fontFamily: [
      'Alibaba-PuHuiTi-Heavy'
    ].join(','),
    color: '#393F5F',
    width: "60%",
    marginLeft: "4%",
  },
  contact: {
    fontSize: 10,
    fontFamily: [
      'Alibaba-PuHuiTi-Heavy'
    ].join(','),
    color: '#393F5F',
    width: "15%",
    marginLeft: "89%",
    marginTop: '-15px',

  },
}));

export default function SimpleCard() {
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

  useEffect(() => {
    fetch("https://awaxii.pocari.id/dev/web_patient?key=all")
      .then((res) => res.json())
      .then((json) => {
        setData({
          result: json,
          DataisLoaded: true,
        });
      });
  }, [])
  const handleClose = () => {
    setAnchorEl(null);
    history("/");
    };
    const Kartu = (props) => {
      const classes = props.classes;
      return (
        <div>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={12} d-flex flex-wrap justifyContent="center">
              <Paper elevation={0} className={classes.paper}>
                <Typography className={classes.title}>{props.judul}</Typography>
                <Grid>
                  <Card className={classes.card}>
                    <Grid container>
                      <Grid item xs={3} >
                        <img src={person} alt="orang" className={classes.image}></img>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography className={classes.pasien}>Nama :  {props.nama}</Typography>
                        <Typography className={classes.pasien}>
                          Umur :  {props.umur} { }
                        </Typography>
                        <Typography className={classes.pasien}>Ruangan : {props.ruangan}</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card className={classes.cardI}>
                      <label className={classes.title2}>Heart Pulse </label>
                      <img src={heart} alt="heart" className={classes.simbol}></img>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className={classes.cardI}>
                      <label className={classes.title2}>Infusion Weight </label>
                      {/* <Typography>Infusion Weight</Typography> */}
                    </Card>
                  </Grid>

                  <Grid item xs={6}>
                    <Card className={classes.cardI}>
                      <label className={classes.title2}>Room</label>
                      <label className={classes.title2}>Temperature</label>
                      {/* <Typography className={classes.title2}>Temperature</Typography> */}
                      <img src={suhur} alt="suhuRuangan" className={classes.simbol}></img>
                    </Card>
                  </Grid>

                  <Grid item xs={6}>
                    <Card className={classes.cardI}>
                      <label className={classes.title2}>Body</label>
                      <label className={classes.title2}>Temperature</label>
                      <img src={suhut} alt="suhuTubuh" className={classes.simbol}></img>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          
        </div>
      );
    };
    return (
      <Card className={classes.root}>
        <div>
          <div d-flex>
            <Toolbar className={classes.header}>
              <img src={awaxi} alt="awaxi" className={classes.picture}></img>
              <Typography className={classes.text}>
                {" "}
                Patient Monitoring System
              </Typography>
              <img src={nurse} alt="nurse" className={classes.nurse}></img>
              <Typography className={classes.text}>Hello Nurse</Typography>
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
                    <MenuItem onClick={handleClose}>Log out</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </div>
        </div>

        <div>
          <Typography
            style={{
              fontFamily: ["Chronicle Display Black"].join(","),
              color: "#393F5F",
              fontSize: "25px",
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "25px",
              fontStyle: "bold",
            }}
          >
            Personal Information
          </Typography>
        </div>
        <div className={classes.luar}>
          {data &&
            data.result.result.map((item) => (
              <Kartu
                judul="Patient  "
                classes={classes}
                nama={item.patient_name}
                umur={item.age}
                ruangan={item.room_name}
              />
            ))}
          {/* <Kartu
          judul="Patient One "
          classes={classes}
          nama="Mahrus"
          umur="30"
          ruangan="Anggrek"
        />

        <Kartu
          judul="Patient Two "
          classes={classes}
          nama="Auliya"
          umur="22"
          ruangan="Melati"
        />

        <Kartu
          judul="Patient Three "
          classes={classes}
          nama="Marya"
          umur="22"
          ruangan="Mawar"
        /> */}
        </div>
        <Grid container>
          <Grid item xs={2}>
            <Paper className={classes.paperF}>
              <h3
                style={{
                  marginTop: "-5px",
                }}
              >
                Patient Details
              </h3>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paperFI}>
              <Grid container>
                <Grid item xs={10}>
                  <h3
                    style={{
                      marginTop: "-5px",
                    }}
                  >
                    Awaxi Information
                  </h3>
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.pasien2}>
                    Patient Monitoring system is a service for monitoring
                    patient health which was developed from technoriders. The
                    Patient Monitoring system services provided are ECG
                    Monitoring, Body Temperature, Infution Drop, and Nurse Call.
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <img
                    src={awaxiInformation}
                    alt="Awaxi Information"
                    className={classes.imageFooter}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.pasien3}>
                    Have any questions? Contact us!
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.contact}>
                    (0761) - 53939
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* <Paper className={classes.paperF}>
        <h3
          style={{
            marginTop: "5px",
          }}
        >
          {" "}
          Patient Details
        </h3>
      </Paper> */}

        {/* <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paperB}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperB}></Paper>
        </Grid>
      </Grid> */}
      </Card>
    );
  }