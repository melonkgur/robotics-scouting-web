import { makeStyles } from "@material-ui/core";
import Counter from "../components/counter"
import { useState } from 'react';
import HomeButton from "../components/homebutton";

const useStyles = makeStyles( theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    }
}));

const Scout = () => {

    const [lowGoal, setLowGoal] = useState(0);
    const [highGoal, setHighGoal] = useState(0);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeButton />
            <Counter title="Im not high" setter={setLowGoal}/>
            <Counter title="Im hithg" setter={setHighGoal}/>
        </div>
    )
}

export default Scout;