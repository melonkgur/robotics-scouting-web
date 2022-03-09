import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


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
            <Grid item xs={12} className={classes.gridItem}>
                {console.log(props.teamData)}
            </Grid>
        </Grid>
    )
}

export default TeamGrid;