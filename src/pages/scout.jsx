import { makeStyles } from "@material-ui/core";
import Counter from "../components/counter"
import HomeButton from "../components/homebutton";

const useStyles = makeStyles( theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    }
}));

const Scout = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeButton />
            <Counter title="Im high"/>
            <Counter title="Im not hithg"/>
        </div>
    )
}

export default Scout;