import  { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { classExpression } from "@babel/types";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main
    }
}))


const TeamProfile = () => {

    const teamNumber = useParams();
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*Fetches localstorage data depending on the team (react-router)*/}
        </div>
    )
}

export default TeamProfile;