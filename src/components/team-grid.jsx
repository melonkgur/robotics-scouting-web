import { Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column'
    }
}))


const TeamGrid = (props) => {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {console.log(props.teams)}
        </Grid>
    )
}

export default TeamGrid;