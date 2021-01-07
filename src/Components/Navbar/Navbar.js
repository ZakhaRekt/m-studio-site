import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PeopleIcon from '@material-ui/icons/People';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import RateReviewIcon from '@material-ui/icons/RateReview';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#422207",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: "#422207",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: "white",
    backgroundColor: "#422207",
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    fontFamily: 'Comfortaa, cursive'
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              M-Studio
          </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key={"Главная"}>
              <ListItemIcon>{<InfoIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Главная"} />
            </ListItem>
            <ListItem button key={"Тренера"}>
              <ListItemIcon>{<PeopleIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Тренера"} />
            </ListItem>
            <ListItem button key={"Фото и видео"}>
              <ListItemIcon>{<PhotoCameraIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Фото и видео"} />
            </ListItem>
            <ListItem button key={"Музыка"}>
              <ListItemIcon>{<MusicNoteIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Музыка"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key={"Контакты"}>
              <ListItemIcon>{<ContactPhoneIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Контакты"} />
            </ListItem>
            <ListItem button key={"Отзывы"}>
              <ListItemIcon>{<RateReviewIcon style={{ color: "white" }} />}</ListItemIcon>
              <ListItemText primary={"Отзывы"} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </header>
  );
}