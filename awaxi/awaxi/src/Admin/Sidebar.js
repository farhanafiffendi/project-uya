import React, {Component} from "react";
// import './sidebar.css';
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Assets/logo.png";
import dashboard from "../Assets/Sidebar/Dashboard.png";
import patient from "../Assets/Sidebar/Patient.png";
import room from "../Assets/Sidebar/Room.png";
import roomPatient from "../Assets/Sidebar/Room_Patient.png";
import awaxi_user from "../Assets/Sidebar/Awaxi_User.png";
import awaxi_register from "../Assets/Sidebar/Awaxi_Register.png";
import iot_patient from "../Assets/Sidebar/Iot_Patient.png";

import { useNavigate } from "react-router-dom";
import {
  Card, 
  Typography, 
  Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 688,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: "300%",
    backgroundColor: "#AFADDE",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 80,
  },
  text: {
    fontFamily: ["Alibaba-PuHuiTi-heavy"].join(","),
    marginLeft: 15,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20,
    color: "#393F5F",
  },
  // button: {
  //   color: "#274C77",
  //   backgroundColor: "white",
  //   marginLeft: 100,
  //   width: 100,
  // },
  icon: {
    marginTop: 3,
    width: 30,
    height: 30,
    marginRight:"8%",
  },
  button: {
    // margin: theme.spacing(2, 0),
    marginTop: "10%",
    width: "90%",
    marginLeft: 10,
    // fontFamily: ["Lato-Semibold"].join(","),
    fontSize: 15,
    color: "#17133A",
    background: "#FFFF",
    boxShadow: "440px  rgba(0,0,0,0.75);",
  },
  card: {
    width: "80%",
    height: 40,
    marginLeft: 25,
  },
  label: {
    marginTop:2,
    // marginLeft: 50,
    fontColor: "#17133A",
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),

  },
  label1: {
    marginTop:2,
    marginRight: "6%",
    fontColor: "#17133A",
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),

  },
}));

export default function SimpleCard() {
  const classes = useStyles();

   const history = useNavigate();
   function handleChange(e) {
     e.preventDefault();
   history("/patient");
   }
   function handleChangeDashboard(e) {
    e.preventDefault();
  history("/admin");
   }
  function handleChangeRoomPatient(e) {
   e.preventDefault();
 history("/roomPatient");
  }
    function handleChangeIoTPatient(e) {
      e.preventDefault();
      history("/IoTPatient");
    }
      function handleChangeAwaxiRegister(e) {
        e.preventDefault();
        history("/awaxiRegister");
      }
       function handleChangeAwaxiUser(e) {
         e.preventDefault();
         history("/awaxiUser");
       }
  function handleChangeRoom(e) {
    e.preventDefault();
  history("/room");
   }

  return (
    <Card className={classes.root}>
      <img src={Logo} alt="awaxi" className={classes.logo}></img>
      <Typography className={classes.text}>
        Patient Monitoring System
      </Typography>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeDashboard}
      >
        <img src={dashboard} alt="orang" className={classes.icon}></img>
        <label className={classes.label}> Dashboard</label>
      </Button>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChange}
      >
        <img src={patient} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> Patient</label>
      </Button>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeRoomPatient}
      >
        <img src={roomPatient} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> Room Patient</label>
      </Button>

      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeRoom}
      >
        <img src={room} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> Room</label>
      </Button>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeIoTPatient}
      >
        <img src={iot_patient} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> IoT Patient</label>
      </Button>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeAwaxiRegister}
      >
        <img src={awaxi_register} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> Awaxi Register</label>
      </Button>
      <Button
        // fullWidth
        // variant="contained"
        className={classes.button}
        onClick={handleChangeAwaxiUser}
      >
        <img src={awaxi_user} alt="orang" className={classes.icon}></img>
        <label className={classes.label1}> Awaxi User</label>
      </Button>

      {/* <Card className={classes.card}>
        <img src={person} alt="orang" className={classes.icon}></img>
        <label className={classes.label}>Dashboard</label>
      </Card> */}
    </Card>
  );
}
