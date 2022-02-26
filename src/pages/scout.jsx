import { makeStyles } from "@material-ui/core";

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
            <a href="/">Home</a>
        </div>
    )
}

export default Scout;