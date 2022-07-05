import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  TextField: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "30ch",
      marginTop: "10%",
    },
  },
  button: {
    width: "15ch",
    marginTop: "15%",
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
}));

export default function EditAwaxiUser() {
  const classes = useStyles();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { key } = useParams();
  console.log(key);

    useEffect(() => {
      getPostById();
    }, [key]);

      const getPostById = () => {
        axios
          .get(`	https://awaxii.pocari.id/dev/web_user?key=${key}`) // <-- remove ;
          .then((res) => {
            const { result } = res.data;
            console.log(result);
            // console.log(user);
            // console.log(key);
            setEmail(result.email);
            setPassword(result.password);
            
          });
      };

        const handleSubmit = () => {
          const user = {
            email: email,
            password: password,
          };
          // let navigate = useNavigate();

          axios
            .post(`	https://awaxii.pocari.id/dev/web_user/edit/${key}`, user)
            .then((res) => {
              history("/awaxiUser", { replace: true });

              console.log(res);
              console.log(res.data);
            });
        };



  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      email,
      password,
    };

    fetch("https://awaxii.pocari.id/dev/web_user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
      setEmail("");

      history("/awaxiUser");
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
                  Edit Awaxi User
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
                      Email
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
                      Password
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <form
                      className={classes.TextField}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </form>
                  </div>
                  <div>
                    <form
                      className={classes.TextField}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </form>
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
