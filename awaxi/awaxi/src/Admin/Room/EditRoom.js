import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField, Button } from "@material-ui/core";
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
  TextField: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '30ch',
      marginTop: "10%",
    },
  },
  button: {
    width: '15ch',
    marginTop: "10%",
    marginLeft: "85%",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    fontFamily: ["Alibaba-PuHuiTi-regular"].join(","),
    bgcolor:"#AFADDE",
  },
}));

export default function EditRoom() {
  const classes = useStyles();
  const [room_name, setRoomName] = useState("");
  const [room_type, setRoomType] = useState("");
  const history = useNavigate();
  
const { key } = useParams();
console.log(key);

  useEffect(() => {
    getPostById();
  }, [key]);


  const getPostById = () => {
    axios
      .get(`	https://awaxii.pocari.id/dev/web_room?key=${key}`) // <-- remove ;
      .then((res) => {
        const { result } = res.data;
        console.log(result);
        setRoomName(result.room_name);
        setRoomType(result.room_type);
      });
  };


  const handleSubmit = () => {
    const room = {
      room_name: room_name,
      room_type: room_type,
      
    };
    // let navigate = useNavigate();

    axios
      .post(`https://awaxii.pocari.id/dev/web_room/edit/${key}`, room)
      .then((res) => {
        history("/room", { replace: true });

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
                  Room Data
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
                        marginTop: "15%",
                        flex: "1 1 100%",
                        marginLeft: "60%",
                      }}
                    >
                      Room Type
                    </Typography>
                  </div>

                </Grid>

                <Grid item xs={6}>
                  <div>
                    <form className={classes.TextField} noValidate autoComplete="off">
                      <TextField id="outlined-basic" variant="outlined" 
                      value={room_name}
                      onChange={(e) => setRoomName(e.target.value)}
                      />
                    </form>
                  </div>
                  <form className={classes.TextField} noValidate autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined" 
                    value={room_type}
                    onChange={(e) => setRoomType(e.target.value)}
                    />
                  </form>
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


