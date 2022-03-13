import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import '../fonts.css';


const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '10vh',
        backgroundColor: '#696969',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1rem',
        transition: 'transform 0.25s ease-out',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)'
        }
    },
    teamTitle: {
        color: '#ffffff',
        fontSize: '3rem',
        fontFamily: 'medium',
        padding: '0',
        margin: '0.5rem'
    }
}))

const TeamGridItem = (props) => {

    const classes = useStyles();

    const [teamData, setTeamData] = useState([])

    useEffect(() => {
        let teamData = JSON.parse(localStorage.getItem(`${props.team}`));
        setTeamData(teamData);
    }, []);


    return  (
        <a href={`/#/team-profile/${props.team}`} style={{ textDecoration: 'none' }}>
            <div className={classes.gridItem}>
                <h2 className={classes.teamTitle}>
                    {props.team}
                </h2>
            </div>
        </a>
    )
}

export default TeamGridItem