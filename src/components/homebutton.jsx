import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    topLeft: {
        position: 'absolute',
        top: '0',
        left: '0',
        color: theme.palette.secondary.light,
        fontSize: '1rem',
        margin: '1rem'
    }
}))

const HomeButton = () => {

    const classes = useStyles();

    return (
        <Button className={classes.topLeft} onClick={e => window.location = '/'} startIcon={<ArrowBackIosIcon />} >Home</Button>
    )
}

export default HomeButton;