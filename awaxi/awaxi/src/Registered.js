import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Logo from "../src/Assets/logo.png";
import img from "../src/Assets/dash.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { methodPOSTSignIn } from "../src/service/method";
const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // minHeight: 688,
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
    marginTop: "10px",
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
    margin: theme.spacing(6),
    // marginLeft: 10,
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
    fontSize: 38,
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
    marginBottom: theme.spacing(5),
    // marginLeft: "10px",
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
    fontFamily: ["Alibaba-PuHuiTi-Regular"].join(","),
    fontSize: 18,
    color: "#393F5F",
  },
}));

export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const [option, setOption] = React.useState("Nurse");
  const history = useNavigate();
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (option == "Nurse") {
  //     history("/pasien");
  //   } else if (option == "Admin") {
  //     history("/admin");
  //   }
  // }
  // const onChange = (event) => {
  //   setOption(event.target.value);
  // };
  //Method Submit

  
  const sendDataToAPI = (e) => {
    e.preventDefault();
    history("/")
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("role_name", role_name);

    if (email) {
      methodPOSTSignIn({
        body: {
          // role_name : role_name,
          email: email,
          password: password,
        },
      }).then((res) => {
        if (res?.message) {
          console.log(res.message, "", "error");
        }
        if (res.role_name == "Admin") {
          console.log("Masuk Admin");
          window.location.href = "/admin";
        } else {
          console.log("Masuk Nurse");
          window.location.href = "/nurse";
        }
      });
    } else {
      console.log("Gagal", "Email tidak valid", "error");
    }
  };

    // const sendDataToAPI = () => {
    //   const user = {
    //     patient_name: patient_name,
    //     date_of_birth: date_of_birth,
    //     age: age,
    //     gender: gender,
    //     address: address,
    //     family_name: family_name,
    //     family_phone: family_phone,
    //   };

    //   axios
    //     .post(`https://awaxii.pocari.id/dev/web_patient/edit/${key}`, user)
    //     .then((res) => {
    //       console.log(res);
    //       console.log(res.data);
    //     });
    // };

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
        <Grid className={classes.paperL} item xs={5} component={Paper}>
          <form className={classes.form} noValidate>
            <h1 className={classes.tulis}>Register</h1>

            <h1 className={classes.tulis2}>HOSPITAL ACCOUNT</h1>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              name="email"
              label="Masukkan Username/Email"
              type="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              name="email"
              label="Masukkan Nama Rumah Sakit"
              type="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendDataToAPI} className={classes.Button}
            >
              <label className={classes.submit}>REGISTER</label>
              
            </Button>
          </form>
          {/* </div> */}
        </Grid>
      </Grid>
    </Card>
  );
}