import React from 'react';
import './Information.css';
import { Container, Grid, Button, Paper, Typography, Fade, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';

const useStyles = makeStyles((theme) => ({
    InfoText: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        textAlign: "center",
    },
    InfoContainer: {
        padding: "450px 0px 20px 0px",
    },
    InfoTitle: {
        textAlign: "center",
        fontSize: "40px",
        color:'white',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    ClockButton: {
        color:'white',
        marginTop:theme.spacing(3)
    },
    MainButton: {
        border:'1px solid white',
        color:'white',
        marginRight: theme.spacing(2),
        '&:hover': {
            color:'#2b1d0e',
            backgroundColor:'white',
        }
    },
    MainList: {
        color: theme.palette.common.white,
        backgroundImage: "url(https://i.imgur.com/5N36Wwa.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        marginTop: "-25px",
        minHeight: "900px",
        borderRadius:'0px'
    },
    MapContariner: {
        backgroundColor: "#442e19",
        padding: '15px'
    },
    Map: {
        margin: theme.spacing(2),
    }

}));
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        fontSize: '20px',
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}
const offset = 3;
const DateNow = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, "");

const Information = () => {
    const classes = useStyles();
    return (
        <>
            <main>
                <Paper className={classes.MainList}>
                    <Container fixed className={classes.InfoContainer}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            xs={12}>
                            <Typography
                                component="h1"
                                gutterBottom
                                className={classes.InfoTitle}>
                                Ballroom Dancing <br /> School
                        </Typography>
                            <Typography
                                component="h2"
                                gutterBottom
                                style={{ textAlign: "center" }}>
                                Алексея и Людмилы <br /> Медуницы
                        </Typography>
                            <Typography
                                component="h1"
                                gutterBottom
                                className={classes.InfoTitle}>
                                "M-Studio"
                        </Typography>
                        </Grid>
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{ marginLeft: "10px" }}
                            xs={12}>
                            <Button variant="outlined" className={classes.MainButton}>
                                Просмотреть фото
                    </Button>
                            <BootstrapTooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title={`Время сейчас: ${DateNow}`}
                                placement="right">
                                <IconButton aria-label="add an alarm" className={classes.ClockButton}>
                                    <AlarmIcon fontSize="large" />
                                </IconButton>
                            </BootstrapTooltip>
                        </Grid>
                    </Container>
                </Paper>
                <Grid
                    container
                    xs={12}
                    justify="center"
                    alignItems="center"
                    className={classes.MapContariner}>
                    <Typography
                        component="h1"
                        gutterBottom
                        className={classes.InfoTitle}
                    >
                        Где мы находимся?
                    </Typography>
                    <Grid
                        className={classes.Map}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        xs={12}>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1939.278836907952!2d34.8122643543323!3d50.92494707983216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x973a13e604ce62d2!2sM-Studio!5e0!3m2!1sru!2sua!4v1603788994324!5m2!1sru!2sua"
                            width="70%"
                            height="450"
                            frameborder="0"
                            style={{ border: "0px" }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0">
                        </iframe>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export default Information;
