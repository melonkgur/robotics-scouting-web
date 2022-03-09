import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";


const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '20vh',
        backgroundColor: '#403e38',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '1rem'
    },
    teamTitle: {
        color: '#ffffff',
        fontFamily: 'medium',
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
        <div className={classes.gridItem}>
            <Typography variant="h3" className={classes.teamTitle}>
                {props.team}
            </Typography>
            <Typography>
                {getAverages(teamData).highGoalAverage}
            </Typography>
        </div>
    )
}

export default TeamGridItem