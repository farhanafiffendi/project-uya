import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField, Button, MenuItem } from "@material-ui/core";
import { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";

import axios from "axios";


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
    marginLeft: "82%",
    marginTop: "5%",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    fontFamily: ["Alibaba-PuHuiTi-regular"].join(","),
    bgcolor: "#AFADDE",
  },
}));

export default function AddPatient() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [patient_name, setpatient_name] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [place_of_birth, setplace_of_birth] = useState("");
  const [room, setRoom] = useState([]);
  const [room_name, setRoomName ]= useState([]);

  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [family_name, setfamily_name] = useState("");
  const [family_phone, setfamily_phone] = useState("");
  const history = useNavigate();



    useEffect(() => {
      getRoomName();
    }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      patient_name,
      date_of_birth,
      place_of_birth,
      age,
      gender,
      address,
      family_name,
      family_phone,
      room_name
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
      setdate_of_birth("");
      setplace_of_birth("");
      setage("");
      setgender("");
      setaddress("");
      setfamily_name("");
      setfamily_phone("");
      setRoomName("");
      history("/Patient");
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
                      {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
                      <TextField
                        style={{ marginTop: "10%" }}
                        value={patient_name}
                        onChange={(e) => setpatient_name(e.target.value)}
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
                          id="date"
                          type="date"
                          value={date_of_birth}
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          onChange={(e) => setdate_of_birth(e.target.value)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          style={{
                            marginTop: "10%",
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
                          marginTop: "20%",
                          flex: "1 1 100%",
                        }}
                      >
                        Place of Birth
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
                      <TextField
                        style={{ marginTop: "10%" }}
                        value={place_of_birth}
                        onChange={(e) => setplace_of_birth(e.target.value)}
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
                        Age
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
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
                          marginTop: "15%",
                          flex: "1 1 100%",
                        }}
                      >
                        Address
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
                      <TextField
                        style={{ marginTop: "10%" }}
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                
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
                        {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
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
                        {/* <TextField
                        fullWidth
                        label="Keterangan"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      /> */}
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
                onClick={addTodo}
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
