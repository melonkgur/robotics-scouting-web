import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";

const useStyles = makeStyles( theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        color: '#ffffff',
    },
    introTitle: {
        color: '#ffffff'
    }
}))

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.introTitle}>Hey there, welcome to</Typography>
            <Typography 
                variant="h2"
                className={classes.title}
            >
            {`Jordan, the scouting software that stands for `}
            {
                <Typed 
                    strings={
                        [
                            'Just',
                            'Observing',
                            'Robots',
                            'Doing',
                            'Absolutely',
                            'Nothing'
                        ]
                    }
                    typeSpeed={40}
                    loop
                />

            } 
            </Typography >
        </div>
    )
}

export default Home;