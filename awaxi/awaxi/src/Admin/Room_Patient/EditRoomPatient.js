import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
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

export default function EditRoomPatient() {
  const classes = useStyles();
  const history = useNavigate();

  const [room, setRoom] = useState([]);
  const [room_name, setroom_name] = useState("");
  const [patientName, setPatientName] = useState([]);
  const [patient_name, setPatientNameT] = useState("");
  const [check_in_date, setcheck_in_date] = useState("");
  const [check_out_date, setcheck_out_date] = useState("");


    const handleChangeRoom = (event) => {
      setroom_name(event.target.value);
    };
    const handleChangeName = (event) => {
      setPatientNameT(event.target.value);
    };
  const { key } = useParams();
  console.log(key);

    useEffect(() => {
      getPostById();
    }, [key]);

      useEffect(() => {
        getRoomName();
      }, []);

      useEffect(() => {
        getPatientName();
      }, []);

      const getPostById = () => {
        axios
          .get(`https://awaxii.pocari.id/dev/web_setting_room?key=${key}`) // <-- remove ;
          .then((res) => {
            const { result } = res.data;
            console.log(result);

            console.log(key);
            setPatientNameT(result.patient_name);
            setroom_name(result.room_name);
            setcheck_in_date(result.check_in_date);
            setcheck_out_date(result.check_out_date);
           
          });
      };
      const getRoomName = () => {
        axios
          .get(`	https://awaxii.pocari.id/dev/web_room?key=all`)
          .then((res) => {
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

      const handleSubmit = () => {
    const user = {
      patient_name: patient_name,
      room_name: room_name,
      check_in_date: check_in_date,
      check_out_date: check_out_date,
    };

    axios
      .post(`https://awaxii.pocari.id/dev/web_setting_room/edit/${key}`, user)
      .then((res) => {
        history("/roomPatient", { replace: true });

        console.log(res);
        console.log(res.data);
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
                  Edit Setting Room-Patient
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
                    {/* <TextField
                      value={room_name}
                      onChange={(e) => setPatientName(e.target.value)}
                      style={{ marginTop: "10%" }}
                    /> */}
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      // defaultvalue={room_name}
                      value={room_name}
                    >
                      <Select native
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={room_name}
                        onChange={handleChangeRoom}
                      >
                        {room.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    {/* <TextField
                      value={patient_name}
                      onChange={(e) => setPatientNameT(e.target.value)}
                      style={{ marginTop: "10%" }}
                    /> */}
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      value={patient_name}
                    >
                      <Select native
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={patient_name}
                        onChange={handleChangeName}
                      >
                        {patientName.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      value={check_in_date}
                      defaultValue="2017-05-24"
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
                      value={check_out_date}
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      onChange={(e) => setcheck_out_date(e.target.value)}
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
