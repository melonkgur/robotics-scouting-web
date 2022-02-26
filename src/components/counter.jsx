import { IconButton, Typography } from '@material-ui/core';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { palette } from '@mui/system';

const useStyles = makeStyles(theme => ({
    container: {
        width: '20em',
        display: 'inline-block'
    },
    add: {
        backgroundColor: '#00af80',
        color: '#0a0a0a',
        borderRadius: '20px',
        marginLeft: '5rem',
        width: '10rem',
        height: '3em'
    },
    subtract: {
        backgroundColor: '#af0040',
        color: '#0a0a0a',
        borderRadius: '20px',
        marginLeft: '5rem',
        width: '10rem',
        height: '3em'
    },
    counter: {
        backgroundColor: '#0a0a0a',
        color: '#8a8a8a',
        textAlign: 'center',
        marginLeft: '5em',
        paddingTop: '4em',
        paddingBottom: '4em',
        fontFamily: 'medium',
        borderRadius: '20px',
        marginRight: '5em',
        marginTop: '2em',
        marginBottom: '2em'
    },
    title: {
        textAlign: 'center',
        marginTop: '8rem',
        marginBottom: '2rem',
        color: '#ffffff'
    }
}))

const Counter = (props) => {
    const classes = useStyles();

    const [counter, setCounter] = useState(0);

    return (
        <div className={classes.container}>
            <Typography
                variant="h3"
                className={classes.title}
            >
                {props.title}
            </Typography>
            <IconButton className={classes.add} size="medium" onClick={e => {
                setCounter(counter+1);
            }}>
                <AddIcon />
            </IconButton>

            <Typography className={classes.counter}>    
                {counter}
            </Typography>

            <IconButton className={classes.subtract} size="medium" onClick={e => {
                if(counter > 0){setCounter(counter-1);}
            }}>
                <RemoveIcon />
            </IconButton>
        </div>
    )
}

export default Counter;