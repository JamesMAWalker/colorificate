import { DRAWER_WIDTH } from '../_constants';
import mqs from './_media-queries.constants';

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',  
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    '& *': {
      margin: '.5rem',
      [mqs.down('xs')]: {
        margin: '0',
      },
    },
  },
});

export default styles;