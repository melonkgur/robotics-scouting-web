
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import Typed from "react-typed";
import '../fonts.css';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        color: '#ffffff',
        fontFamily: 'medium',
        width: '70%',
    },
    introTitle: {
        color: theme.palette.secondary.main,
        fontFamily: 'nice',
    },
    pink: {
        color: theme.palette.secondary.main,
    },
    kindaCenter: {
        paddingTop: '17%',
        paddingLeft: '17%'
    },
    goToFieldButton: {
        backgroundColor: theme.palette.secondary.main,
        color: '#ffffff'
    }
}))

const Scout = () => {

    const classes = useStyles();
    
    return (
        <div>
            fdklsajfldsa
        </div>
    )
}

export default Scout;