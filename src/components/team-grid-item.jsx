import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import '../fonts.css';


const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '40vh',
        backgroundColor: '#696969',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    },
    teamDataTitle: {
        color: '#ffffff',
        fontSize: '1rem',
        fontFamily: 'medium',
        padding: '0',
        fontWeight: '300'

    }
}))

const TeamGridItem = (props) => {

    const classes = useStyles();

    const [teamData, setTeamData] = useState([])

    useEffect(() => {
        let teamData = JSON.parse(localStorage.getItem(`${props.team}`));
        setTeamData(teamData);
    }, []);

    const getAverages = (teamData) => {
        {console.log(teamData)}
        let length = teamData.length;
        let highGoalTotal = 0;
        let lowGoalTotal = 0;

        teamData.map(team => {
            highGoalTotal += team.highGoalOperated;
            lowGoalTotal += team.lowGoalOperated;
        });
        return {
            highGoalAverage: highGoalTotal/length,
            lowGoalAverage: lowGoalTotal/length
        }
    }


    return  (
        <a href={`/#/team-profile/${props.team}`} style={{ textDecoration: 'none' }}>
            <div className={classes.gridItem}>
                <h2 className={classes.teamTitle}>
                    {props.team}
                </h2>
                <h3 className={classes.teamDataTitle}>
                    {`Average Highgoal Made Auto: ${getAverages(teamData).highGoalAverage}`}
                </h3>
                <h3 className={classes.teamDataTitle}>
                    {`Average Lowgoal Made Auto: ${getAverages(teamData).highGoalAverage}`}
                </h3>
                <h3 className={classes.teamDataTitle}>
                    {`Average Highgoal Made Teleop: ${getAverages(teamData).highGoalAverage}`}
                </h3>
                <h3 className={classes.teamDataTitle}>
                    {`Average Lowgoal Made Teleop: ${getAverages(teamData).highGoalAverage}`}
                </h3>
            </div>
        </a>
    )
}

export default TeamGridItem