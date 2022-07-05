import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    TextField: {
        '& > *': {
            // margin: theme.spacing(1),
            width: '30ch',
            marginTop: "10%",
        },
    },
    button: {
        width: '15ch',
        marginTop: "8%",
        marginLeft: "85%",
        boxShadow: theme.shadows[5],
        borderRadius: 10,
        fontFamily: ["Alibaba-PuHuiTi-regular"].join(","),
        bgcolor: "#AFADDE",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '30ch',
        marginTop: "10%",
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '30ch',
        marginTop: "9%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddIoTPatient() {
    const classes = useStyles();
    const history = useNavigate();
    const [patient, setPatient] = useState([]);
    const [patient_name, setpatient_name] = useState("");
    const [tools_id, settools_id] = useState("");
    const [check_in_date,setcheck_in_date] = useState("");
    const [check_out_date, setcheck_out_date] = useState("");
    const [IoT, setIoT] = useState([]);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

     useEffect(() => {
       getPatientName();
     }, []);

     useEffect(() => {
       getIoTID();
     }, []);

     const getPatientName = () => {
       axios
         .get(`	https://awaxii.pocari.id/dev/web_patient?key=all`)
         .then((res) => {
           const { result } = res.data;
           console.log(result);
           const patienttmp = [];
           result.map((r) => {
             patienttmp.push({
               value: r.patient_id,
               label: r.patient_name,
             });
           });
           setPatient(patienttmp);
           // console.log(user);
           // console.log(key);
         });
     };

         const getIoTID = () => {
           axios
             .get(`	https://awaxii.pocari.id/dev/web_setting_iot?key=all`)
             .then((res) => {
               const { result } = res.data;
               console.log(result);
               const iottmp = [];
               result.map((r) => {
                 iottmp.push({
                   value: r.tools_id,
                   label: r.patient_id,
                 });
               });
               setIoT(iottmp);
               // console.log(user);
               // console.log(key);
             });
         };

         const handleSubmit = (e) => {
           e.preventDefault();
           const newTodo = {
             patient_name,
             tools_id,
             check_in_date,
             check_out_date,
           };

           fetch("https://awaxii.pocari.id/dev/web_patient/add", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(newTodo),
           }).then(() => {
             // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
            setpatient_name("");
            settools_id("");
            setcheck_in_date("");
            setcheck_out_date("");
             history("/IoTPatient");
             console.log("new todo added.");
           });
         };


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
                <div>
                  <Typography
                    style={{
                      fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                      color: "#64789B",
                      fontSize: "40px",
                      fontStyle: "bold",
                      marginTop: "15px",
                      flex: "1 1 100%",
                      marginLeft: "2%",
                    }}
                  >
                    Add Setting IoT-Patient
                  </Typography>
                </div>
                <Grid container>
                  <Grid item xs={6}>
                    <div>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                          color: "#64789B",
                          fontSize: "20px",
                          fontStyle: "bold",
                          marginTop: "13%",
                          flex: "1 1 100%",
                          marginLeft: "60%",
                        }}
                      >
                        Patient Name
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                          color: "#64789B",
                          fontSize: "20px",
                          fontStyle: "bold",
                          marginTop: "13%",
                          flex: "1 1 100%",
                          marginLeft: "60%",
                        }}
                      >
                        IoT Id
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                          color: "#64789B",
                          fontSize: "20px",
                          fontStyle: "bold",
                          marginTop: "12%",
                          flex: "1 1 100%",
                          marginLeft: "60%",
                        }}
                      >
                        Check-in-date
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                          color: "#64789B",
                          fontSize: "20px",
                          fontStyle: "bold",
                          marginTop: "12%",
                          flex: "1 1 100%",
                          marginLeft: "60%",
                        }}
                      >
                        Check-Out-date
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          //   value={age}
                          //   onChange={handleChange}
                          label="Patient Name"
                        >
                          {patient.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={age}
                          onChange={handleChange}
                          label="Age"
                        >
                          {IoT.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.button}
                  // endIcon={<Icon>send</Icon>}
                >
                  SUBMIT
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
}

