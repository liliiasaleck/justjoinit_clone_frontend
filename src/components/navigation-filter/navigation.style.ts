import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '11.7%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"100%",
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      top: '11.5%',
      left: '50%',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      top: '10.5%',
      left: '50%',
      paddingLeft: '2rem',
      paddingRight: '7rem',
    },
  },
}));