import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { useParams, useNavigate } from "react-router-dom";

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
  button: {
    width: "15ch",
    marginLeft: "85%",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    fontFamily: ["Alibaba-PuHuiTi-regular"].join(","),
    bgcolor: "#AFADDE",
  },
}));
export default function EditPatient() {
  const classes = useStyles();
  const [patient_name, setPatientName] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [age, setage] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [family_name, setfamily_name] = useState("");
  const [family_phone, setfamily_phone] = useState("");
  const [room_name, setRoomName] = useState("");

  const [room, setRoom] = useState([]);

  const [value, setValue] = React.useState("female");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  let navigate = useNavigate();

  const { key } = useParams();
  console.log(key);

  useEffect(() => {
    getPostById();
  }, [key]);

  useEffect(() => {
    getRoom();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getPostById = () => {
    axios
      .get(`https://awaxii.pocari.id/dev/web_patient?key=${key}`) // <-- remove ;
      .then((res) => {
        const { result } = res.data;
        console.log(result);
        // console.log(user);
        // console.log(key);
        setPatientName(result.patient_name);
        setdate_of_birth(result.date_of_birth);
        setage(result.age);
        setGender(result.gender);
        setAddress(result.address);
        setfamily_name(result.family_name);
        setfamily_phone(result.family_phone);
        setRoomName(result.room_name);
      });
  };
  const getRoom = () => {
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

  // const getRoomById = () => {
  //   axios
  //     .get(`https://awaxii.pocari.id/dev/web_patient?key=${key}`) // <-- remove ;
  //     .then((res) => {
  //       const { result } = res.data;
  //       console.log(result);
  //       // console.log(user);
  //       // console.log(key);
  //       setRoomKey(result.room_name);
  //     });
  // };

  const handleSubmit = () => {
    const user = {
      patient_name: patient_name,
      date_of_birth: date_of_birth,
      age: age,
      gender: gender,
      address: address,
      family_name: family_name,
      family_phone: family_phone,
    };

    axios
      .post(`https://awaxii.pocari.id/dev/web_patient/edit/${key}`, user)
      .then((res) => {
        navigate("/patient", { replace: true });

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
                    marginTop: "10px",
                    flex: "1 1 100%",
                  }}
                >
                  Patient
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
                        marginTop: "10px",
                        flex: "1 1 100%",
                      }}
                    >
                      Patient Data
                    </Typography>
                  </div>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "20%",
                          flex: "1 1 100%",
                        }}
                      >
                        Patient Name
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        value={patient_name}
                        onChange={(e) => setPatientName(e.target.value)}
                        style={{ marginTop: "10%" }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "15%",
                          flex: "1 1 100%",
                        }}
                      >
                        Date of Birth
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <form className={classes.container} noValidate>
                        <TextField
                        style={{marginTop: "8%", width:"80%"}}
                          id="date"
                          type="date"
                          value={date_of_birth}
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          onChange={(e) => setdate_of_birth(e.target.value)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "15%",
                          flex: "1 1 100%",
                        }}
                      >
                        Age
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        style={{ marginTop: "10%" }}
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "20%",
                          flex: "1 1 100%",
                        }}
                      >
                        Gender
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        component="fieldset"
                        style={{ marginTop: "15%" }}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "15%",
                          flex: "1 1 100%",
                        }}
                      >
                        Address
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        style={{ marginTop: "10%" }}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  {/* <Grid container>
                    <Grid item xs={4}>
                      <Typography
                        style={{
                          fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                          color: "#64789B",
                          fontSize: "22px",
                          fontStyle: "bold",
                          marginTop: "15%",
                          flex: "1 1 100%",
                        }}
                      >
                        Room
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        
                        select
                        style={{marginTop: "10%", width: "78%" }}
                        value={room_name}
                        onChange={(e) => setRoomName(e.target.value)}
                        SelectProps={{
                          native: true,
                        }}
                        
                      >
                        {room.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>

                    </Grid>
                  </Grid> */}
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <Typography
                      style={{
                        fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
                        color: "#64789B",
                        fontSize: "20px",
                        fontStyle: "bold",
                        marginTop: "10px",
                        flex: "1 1 100%",
                      }}
                    >
                      Family Data
                    </Typography>

                    <Grid container>
                      <Grid item xs={4}>
                        <Typography
                          style={{
                            fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                            color: "#64789B",
                            fontSize: "22px",
                            fontStyle: "bold",
                            marginTop: "20%",
                            flex: "1 1 100%",
                          }}
                        >
                          Family Name
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          style={{ marginTop: "10%" }}
                          value={family_name}
                          onChange={(e) => setfamily_name(e.target.value)}
                        />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={4}>
                        <Typography
                          style={{
                            fontFamily: ["Alibaba-PuHuiTi-Reguler"].join(","),
                            color: "#64789B",
                            fontSize: "22px",
                            fontStyle: "bold",
                            marginTop: "15%",
                            flex: "1 1 100%",
                          }}
                        >
                          Phone Number
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          style={{ marginTop: "7%" }}
                          value={family_phone}
                          onChange={(e) => setfamily_phone(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleSubmit(key);
                }}
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

    //   <Grid container>
    //       <Grid item xs={6}>
    //         <Header />
    //       </Grid>
    //       <Grid item xs={6} >
    //         <Sidebar />
    //       </Grid>
    //     </Grid>
  );
}
