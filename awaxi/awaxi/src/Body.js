import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteIcon from '@material-ui/icons/Favorite';


import {
  Grid,
  Paper,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Button,

} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "100vh",
    backgroundColor: "white",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "200px",
  },
  paper: {
    flex: 1,
    width: "800px",
    height: "200px",
    outline: "none",
    backgroundColor: "#22A7F0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  PaperModal: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(100),
      // height: theme.spacing(100),
    },
    flex: 1,
    width: "300px",
    height: "400px",
    outline: "none",
    backgroundColor: "#22A7F0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderRadius: 15,
    // overflowY: "auto",
    marginLeft: "100px",
    marginRight: "370px",
  },
  PaperM: {
    flex: 1,
    // flexDirection: 'column',
    display: "flex",
    width: "100px",
    // height: '10px',
    outline: "none",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  PaperMG: {
    flex: 1,
    // flexDirection: 'column',
    display: "flex",
    width: "100px",
    height: "50px",
    outline: "none",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  PaperMI: {
    flex: 1,
    // flexDirection: 'column',
    display: "flex",
    width: "100px",
    height: "50px",
    outline: "none",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderRadius: 15,
    position: "relative",
    overflowY: "auto",
  },
  Icon: {
    position: "absolute",
    top: -1,
    left: 5,
    width: 60,
    height: 60,
  },
  IconM: {
    position: "absolute",
    top: -1,
    left: 2,
    width: 40,
    height: 40,
  },
  Button: {
    top: -20,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 100,
  },
  Text: {
    textAlign: "center",
    fontSize: 30,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <AccountBoxIcon className={classes.Icon}></AccountBoxIcon>
        {/* <button type="button" onClick={handleOpen} className={classes.Button}>
          Detail
        </button> */}
        <Button  onClick={handleOpen}  variant="contained">
          Detail
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.PaperModal}>
              {/* <Typography className={classes.Text} > AWAXI (Sistem Monitoting Pasien)</Typography> */}
              <Grid container>
                <Grid item xs={3}>
                  <Paper elevation={0} className={classes.PaperM}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper elevation={1} className={classes.PaperM}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper elevation={2} className={classes.PaperM}>
                    <FavoriteIcon className={classes.IconM}> </FavoriteIcon>
                  </Paper> 
                </Grid>
                <Grid item xs={3}>
                  <Paper elevation={3} className={classes.PaperM}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper elevation={0} className={classes.PaperMG}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper elevation={1} className={classes.PaperMG}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper elevation={0} className={classes.PaperMI}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper elevation={1} className={classes.PaperMI}>
                    <AccountBoxIcon className={classes.IconM}></AccountBoxIcon>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </Paper>
      <Paper elevation={1} className={classes.paper}>
        <AccountBoxIcon className={classes.Icon}></AccountBoxIcon>
      </Paper>

      <Paper elevation={2} className={classes.paper}>
        <AccountBoxIcon className={classes.Icon}></AccountBoxIcon>
      </Paper>
    </div>
  );
}