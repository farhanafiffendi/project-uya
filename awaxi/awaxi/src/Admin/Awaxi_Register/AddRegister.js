import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Card, Grid, Typography, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
        marginTop: "15%",
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
}));

export default function AddPatient() {
    const classes = useStyles();
    const history = useNavigate();
    const [production_date, setproduction_date] = React.useState(
        new Date("2014-08-18T21:11:54"));
    const [purchase_date, setpurchase_date] = React.useState(
        new Date("2014-08-18T21:11:54"));
    const [serial_number, setserial_number] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            serial_number,
            purchase_date,
            production_date,
        };

        fetch("https://awaxii.pocari.id/dev/web_tools/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        }).then(() => {
            history("/awaxiRegister");
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
                                    Awaxi Register
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
                                            Production Date
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
                                            Purchase Date
                                        </Typography>
                                    </div>

                                </Grid>

                                <Grid item xs={6}>
                                    <div>
                                        <form className={classes.TextField} noValidate autoComplete="off">
                                            <TextField id="outlined-basic" variant="outlined" 
                                            value={serial_number}
                                            onChange={(e) => setserial_number(e.target.value)}/>
                                        </form>
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
                                            value={production_date}
                                            onChange={(e) => setproduction_date(e.target.value)}
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
                                            value={purchase_date}
                                            onChange={(e) => setpurchase_date(e.target.value)}
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

