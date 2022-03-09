import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '100px',
        backgroundColor: '#ffffff'
    }
}))

const TeamGridItem = (props) => {

    const classes = useStyles();

    return  (
        <div className={classes.gridItem}>
            {console.log(props.team)}
        </div>
    )
}

export default TeamGridItem