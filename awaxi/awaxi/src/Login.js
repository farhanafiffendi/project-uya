import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Logo from "../src/Assets/logo.png";
import img from "../src/Assets/dash.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useNavigate, useHistory } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { methodPOSTSignIn } from "../src/service/method";
import Link from "@material-ui/core/Link";
import {useMutation} from 'react-query';
import {API} from './config/api'
import { UserContext } from "./Store/useContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 688,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#AFADDE",
  },
  image: {
    width: "70px",
    height: "70px",
    fontSize: "1rem",
    marginLeft: 20,
    marginTop: 10,
  },
  Button: {
    marginTop: "3%",
  },
  logo: {
    width: "350px",
    height: "350px",
    fontSize: "1rem",
    marginLeft: 200,
    marginTop: 50,
  },
  list: {
    padding: 0,
  },
  // drop: {
  //   borderRadius: "100px",
  //   // boxShadow: "440px 40px 5px 0px rgba(0,0,0,0.75);",
  //   marginLeft: '75%',
  // },
  paperL: {
    margin: theme.spacing(6, 1),
    marginLeft: 120,
    marginTop: 20,
    borderRadius: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // paper: {
  //   margin: theme.spacing(6, 1),
  //   borderRadius: 35,
  //   display: "flex",
  //   flexDirection: "column",
  // },
  tulis: {
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
    fontSize: 40,
    color: "#2F2F2F",
    marginRight: "70%",
  },

  tulis2: {
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
    fontSize: 40,
    color: "#6358DC",
    marginRight: "10%",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    marginLeft: "10px",
  },
  submit: {
    // margin: theme.spacing(2, 0),
    // marginTop: "-10%",
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
    fontSize: 20,
    color: "#393F5F",
    // background: "#BFD2F8",
    boxShadow: "440px  rgba(0,0,0,0.75);",
  },
  drop: {
    borderRadius: "100px",
    // boxShadow: "440px 40px 5px 0px rgba(0,0,0,0.75);",
    marginLeft: "78%",
  },
  list: {
    padding: 0,
  },
  title: {
    marginBottom: "40%",
    fontFamily: ["Alibaba-PuHuiTi-Heavy"].join(","),
    fontSize: 40,
    color: "#393F5F",
    marginLeft: "20%",
  },
  title1: {
    marginBottom: "40%",
    fontFamily: ["Alibaba-PuHuiTi-Regular"].join(","),
    fontSize: 18,
    color: "#393F5F",
    marginLeft: "35%",
  },
  link: {
    fontSize: 15,
    color: "#393F5F",
    marginTop: 20,
    fontFamily: ["Alibaba-PuHuiTi-Regular"].join(","),
  },
}));

export default function SimpleCard() {
  let navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const [state, dispatch] = useContext(UserContext);

  console.log(state);

  const [loading, setLoading] = useState(false); //set spinner

  const classes = useStyles();

  // Create variabel for store data with useState here ...
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  //timeout spinner
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/admin")
    }
  }, []);

  // Create function for handle insert data process with useMutation here ...
  const handleSubmit = useMutation(async (e) => {
    try {
      setLoading(true)//kondisi spinner
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post('/login', body, config);
      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.role_name
        })
        localStorage.setItem("user-info", JSON.stringify(response));
        navigate("/patient")
      }
      if (response.role_name == "Nurse") {
        navigate('/admin')
      } else {
        navigate('/')
      }

      setMessage('login success')

      // Handling response here
    } catch (error) {
    }
  });
  return (
    <Card className={classes.root}>
      <img src={Logo} alt="gambar" className={classes.image} />

      <Grid container>
        <Grid item xs={6}>
          <img src={img} alt="logo" className={classes.logo} />
          <label className={classes.title}>Selamat Datang di AWAXI</label>
          <div>
            <label className={classes.title1}>
              Masuk dan Monitoring Pasienmu disini
            </label>
          </div>
        </Grid>
        <Grid className={classes.paperL} item xs={4} component={Paper}>
          <form onSubmit={(e) => handleSubmit.mutate(e)} className={classes.form} noValidate>
            <h1 className={classes.tulis}>LOGIN</h1>
            <h1 className={classes.tulis2}>AWAXI ACCOUNT</h1>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Masukkan Username/Email"
              type="email"
              id=""
              value={email} 
              onChange={handleChange}
              autoComplete="current-email"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              label="Masukkan Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={sendDataToAPI}
              className={classes.Button}
            >
              <label className={classes.submit}>Sign In</label>
            </Button>
          </form>
          {/* </div> */}
        </Grid>
      </Grid>
    </Card>
  );
}
