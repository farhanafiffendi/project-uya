import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/Admin/Header";
import Sidebar from "../src/Admin/Sidebar";
import CardContent from '@material-ui/core/CardContent';
import { Card, Grid, Paper, TextField, } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import admin from "../src/Assets/admin.png";
import image from "../src/Assets/image.png"
import { useEffect, useState } from "react";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 350,
    minHeight: 750,
    borderRadius: 0,
    backgroundColor: "white",
  },
  card: {
    height: "570px",
    marginLeft: "2%",
    // marginBottom: "40%",
    marginTop: "2%",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(1),
    // paddingTop: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
    backgroundColor: "white",
    width: "88%",
  },
  cardI: {
    width: "90%",
    height: "90%",
    backgroundColor: "#E6E6F4",
    borderRadius: 15,
  },
  ImageFooter: {
    marginTop: 8,
    marginLeft: 10,
    width: 200,
    height: 125,
  },
  Nurse: {
    fontFamily: [
      'Chronicle Display Black'
    ].join(','),
    color: '#F08910',
    fontSize: "40px",
    marginTop: "25px",
    marginLeft: "5px",
    fontStyle: "bold",
  },
  TablePas: {
    width: "70%",
    height: "120px",
    backgroundColor: "#E6E6F4",
    borderRadius: 15,
    marginTop: "20px",
    marginLeft: "5px",
  
  },
  paperFI: {
    flex: 1,
    width: "97%",
    height: "150px",
    outline: "none",
    marginRight: 20,
    marginTop: "40px",
    marginLeft:"5px",
    backgroundColor: "#E6E6F4",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
    color: '#393F5F',
    fontSize:"15px",
  },
  pasien2: {
    marginBottom: "3px",
    fontSize: 15,
    fontFamily: [
      'Alibaba-PuHuiTi-regular'
    ].join(','),
    color: '#393F5F',
    width: "100%",
    marginLeft: "4%",
    marginTop: '-10px',
  },
  pasien3: {
    fontSize: 10,
    fontFamily: [
      'Alibaba-PuHuiTi-regular'
    ].join(','),
    color: '#393F5F',
    width: "15%",
    marginLeft: "80%",
    marginTop: '-25px',
  },
  contact: {
    fontSize: 10,
    fontFamily: [
      'Alibaba-PuHuiTi-Heavy'
    ].join(','),
    color: '#393F5F',
    width: "15%",
    marginLeft: "89%",
    marginTop: '-15px',
  },
  imageFooters: {
    width: "88%",
    height: "120px",
    marginTop: '-28px',
    marginLeft: 18,
  },
}));



export default function Admin() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [total, setTotal] = useState(0)
  const [patient, setPatient] = useState(0)
  const [iot, setIot] = useState(0)
  // const Kartu = (props) => {const classes = props.classes;


  useEffect(() => {
    axios.get(`https://awaxii.pocari.id/dev/web_room?key=count`)
      .then(res => {
        setTotal(res?.data?.result?.count_room)
      })
        .catch(err => {
        })
      },[])

      useEffect(() => {
        axios.get(`https://awaxii.pocari.id/dev/web_patient?key=count`)
          .then(res => {
            setPatient(res?.data?.result?.count_patient)
          })
            .catch(err => {
            })
          },[])

      useEffect(() => {
            axios.get(`https://awaxii.pocari.id/dev/web_tools?key=count`)
              .then(res => {
                setIot(res?.data?.result?.count_tools)
              })
                .catch(err => {
                })
              },[])
    
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        <Grid item xs={9}>
          <Header />
          <CardContent className={classes.card}>
            <Grid item xs={8}>
              <Paper className={classes.cardI}>
                <Grid container>
                  <Grid item xs={9}>
                    <div>
                      <Typography
                        style={{
                          fontFamily: [
                            'Chronicle Display Black'
                          ].join(','),
                          color: '#393F5F',
                          fontSize: "40px",
                          marginTop: "25px",
                          marginLeft: "20px",
                          fontStyle: "bold",
                        }}
                      >
                        Good Morning,
                        <label className={classes.Nurse}>Nurse</label>
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        style={{
                          fontFamily: [
                            'Alibaba-PuHuiTi-Regular'
                          ].join(','),
                          color: '#393F5F',
                          fontSize: "18px",
                          marginBottom: "10px",
                          marginLeft: "20px",
                          fontStyle: "bold",
                        }}
                      >
                        {" "}
                        Have Nice Day at Work
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={admin} alt="Awaxi Information" className={classes.ImageFooter} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <div>
              <Typography
                style={{
                  fontFamily: [
                    'Chronicle Display Black'
                  ].join(','),
                  color: '#64789B',
                  fontSize: "40px",
                  marginLeft: "5px",
                  fontStyle: "bold",
                  marginTop: "20px",
                }}
              >
                Weekly Reports
              </Typography>
            </div>
            <Grid container>
              <Grid item xs={4}>
                <Paper className={classes.TablePas}>
                  <Grid>
                    {/* <div> */}
                    <Typography
                      style={{
                        fontFamily: [
                          'Alibaba-PuHuiTi-Heavy'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "20px",
                        // marginTop: "25px",
                        marginLeft: "10px",
                        fontStyle: "bold",
                        }}>
                    Patients Total 
                  </Typography>
                  {/* Membuat Style Angka */}
                  <div style={{
                        fontFamily: [
                          'Chronicle Display Black'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "80px",
                        marginLeft: "160px",
                        marginTop:"-10px",
                        fontStyle: "bold",
                        textDecorationLine: 'underline',
                        }}>
                  {patient}
                  </div>
                  {/* </div> */}
              </Grid>
            </Paper>
        </Grid>
        <Grid item xs={4}>
                <Paper className={classes.TablePas}>
                  <Grid>
                    {/* <div> */}
                    <Typography
                      style={{
                        fontFamily: [
                          'Alibaba-PuHuiTi-Heavy'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "20px",
                        // marginTop: "25px",
                        marginLeft: "10px",
                        fontStyle: "bold",
                        }}
                      >
                    Rooms Total
                  </Typography>
                  <div style={{
                        fontFamily: [
                          'Chronicle Display Black'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "80px",
                        marginLeft: "160px",
                        marginTop:"-10px",
                        fontStyle: "bold",
                        textDecorationLine: 'underline',
                        }}>
                  {total}
                    </div>
                  {/* </div> */}
              </Grid>
            </Paper>
        </Grid>
        <Grid item xs={4}>
                <Paper className={classes.TablePas}>
                  <Grid>
                    {/* <div> */}
                    <Typography
                      style={{
                        fontFamily: [
                          'Alibaba-PuHuiTi-Heavy'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "20px",
                        // marginTop: "25px",
                        marginLeft: "10px",
                        fontStyle: "bold",
                        }}
                      >
                    IoT Total
                  </Typography>
                  <div style={{
                        fontFamily: [
                          'Chronicle Display Black'
                        ].join(','),
                        color: '#393F5F',
                        fontSize: "80px",
                        marginLeft: "160px",
                        marginTop:"-10px",
                        fontStyle: "bold",
                        textDecorationLine: 'underline',
                        }}>
                  {iot}
                  </div>
              </Grid>
            </Paper>
        </Grid>
        <Grid >
            <Paper className={classes.paperFI}>
              <Grid container>
                <Grid item xs={10}>
                  <h3
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    Awaxi Information
                  </h3>
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.pasien2}>
                  One of the important things in health institutions to serve the community is medical devices. 
                  Health agencies need quality health services that are technological and accurate so as not to hinder the community's right to obtain health services. 
                  Not only that, nurses have difficulty in monitoring the TTV condition of inpatients regularly. 
                  
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <img src={image} alt="Awaxi Information" className={classes.imageFooters} />
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.pasien3}>
                    Have any questions?
                    Contact us!
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.contact}>
                    (0761) - 53939
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    </CardContent>
        </Grid >
      </Grid >
    </Card >
  );
}



