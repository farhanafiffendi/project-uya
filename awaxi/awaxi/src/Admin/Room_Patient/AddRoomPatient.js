import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    "& > *": {
      // margin: theme.spacing(1),
      width: "30ch",
      marginTop: "10%",
    },
  },
  button: {
    width: "15ch",
    marginTop: "8%",
    marginLeft: "85%",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    fontFamily: ["Alibaba-PuHuiTi-regular"].join(","),
    bgcolor: "#AFADDE",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
    marginTop: "10%",
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
    marginTop: "9%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddRoomPatient() {
  const classes = useStyles();
  const history = useNavigate();
  const [room, setRoom] = useState([]);
  const [roomT, setRoomT] = useState("");
  const [patientName, setPatientName] = useState([]);
  const [patientNameT, setPatientNameT] = useState("");
  const [check_in_date, setcheck_in_date] = useState("");
  const [check_out_date, setcheck_out_date] = useState("");

 
  useEffect(() => {
    getRoomName();
  }, []);

  useEffect(() => {
    getPatientName();
  }, []);
  
  const handleChangeRoom = (event) => {
    setRoomT(event.target.value);
  };
  const handleChangeName = (event) => {
    setPatientNameT(event.target.value);
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTodo = {
        check_in_date,
        check_out_date,
      };

      fetch("	https://awaxii.pocari.id/dev/web_setting_room/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }).then(() => {
        setcheck_in_date("");
        setcheck_out_date("");
        
        history("/roomPatient");
        console.log("new todo added.");
      });
    };

  const getRoomName = () => {
    axios.get(`	https://awaxii.pocari.id/dev/web_room?key=all`).then((res) => {
      const { result } = res.data;
      console.log(result);
      const roomtmp = [];
      result.map((r) => {
        roomtmp.push({
          value: r.room_id,
          label: r.room_name,
        });
      });
      setRoom(roomtmp);
      // console.log(user);
      // console.log(key);
    });
  };

  const getPatientName = () => {
    axios
      .get(`	https://awaxii.pocari.id/dev/web_patient?key=all`)
      .then((res) => {
        const { result } = res.data;
        console.log(result);
        const nametmp = [];
        result.map((r) => {
          nametmp.push({
            value: r.patient_id,
            label: r.patient_name,
          });
        });
        setPatientName(nametmp);
        // console.log(user);
        // console.log(key);
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
                  Add Setting Room-Patient
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
                      Room Name
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
                        value={roomT}
                        onChange={handleChangeRoom}
                      >
                        {room.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem>

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
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
                        value={patientNameT}
                        onChange={handleChangeName}
                      >
                        {patientName.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  </div>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue=""
                      value={check_in_date}
                      className={classes.textField}
                      onChange={(e) => setcheck_in_date(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue=""
                      value={check_out_date}
                      onChange={(e) => setcheck_out_date(e.target.value)}
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
