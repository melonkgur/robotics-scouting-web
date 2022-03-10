import  { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import BackButton from "../components/backbutton";
import { useEffect, useState } from "react";
import DataGrid from 'react-data-grid';
import '../fonts.css';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main
    },
}))


const columnsTeleop = [
    {
        key: 'id', 
        name: 'Match Number', 
    },
    {
        key: 'highGoalAttempts',
        name: 'High Goal Attempts',
    },
    {
        key: 'highGoalMade',
        name: 'High goal Made',
    },
    {
        key: 'lowGoalAttempts',
        name: 'Low Goal Attempts',
    },
    {
        key: 'lowGoalMade',
        name: 'Low Goal Made',
    },
    {
        key: 'climbAbility',
        name: 'Bar Climbed To',
    }
];

const rows = [
    { id: 5, highGoalAttempts: 3, highGoalMade: 1, lowGoalAttempts: 3, lowGoalMade: 2, climbAbility: 'low rung' },
    { id: 5, highGoalAttempts: 3, highGoalMade: 1, lowGoalAttempts: 3, lowGoalMade: 2, climbAbility: 'low rung' },

    { id: 5, highGoalAttempts: 3, highGoalMade: 1, lowGoalAttempts: 3, lowGoalMade: 2, climbAbility: 'low rung' },
    { id: 5, highGoalAttempts: 3, highGoalMade: 1, lowGoalAttempts: 3, lowGoalMade: 2, climbAbility: 'low rung' },
    { id: 5, highGoalAttempts: 3, highGoalMade: 1, lowGoalAttempts: 3, lowGoalMade: 2, climbAbility: 'low rung' }

]


const TeamProfile = () => {

    const teamNumber = useParams();
    const classes = useStyles();

    const [teamData, setTeamData] = useState();



    useEffect(() => {
        let data = [];
        data = localStorage.getItem(`${teamNumber}`);
        setTeamData(data);
    }, []);


    return (
        <div className={classes.root}>
            {/*Fetches localstorage data depending on the team (react-router)*/}
            <BackButton title="Team List" lastPage="/#/central-computer" />
            <DataGrid 
                columns={columnsTeleop}
                rots={rows}
            />
        </div>
    )
}

export default TeamProfile;