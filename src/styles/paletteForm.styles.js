import { DRAWER_WIDTH } from '../_constants';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: 'flex',
    marginTop: '64px',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  drawerHeaders: {
    width: '100% !important',
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '2rem 0',
    width: '100%',

    '& button': {
      fontSize: '1.5rem',
    },
  },
  drawerContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  drawerHeader: {},
});

export default styles;