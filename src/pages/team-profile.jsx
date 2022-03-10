import  { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import BackButton from "../components/backbutton";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
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
        field: 'id', 
        headerName: 'Match Number', 
        width: 190
    },
    {
        field: 'highGoalAttempts',
        headerName: 'High Goal Attempts',
        width: 190
    },
    {
        field: 'highGoalMade',
        headerName: 'High goal Made',
        width: 190
    },
    {
        field: 'lowGoalAttempts',
        headerName: 'Low Goal Attempts',
        width: 190
    },
    {
        field: 'lowGoalMade',
        headerName: 'Low Goal Made',
        width: 190
    },
    {
        field: 'climbAbility',
        headerName: 'Bar Climbed To',
        width: 190
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
                style={{ height: '400px', width: '80%', top: '30%', fontFamily: 'medium', color: '#ffffff' }}
                rows={rows}
                columns={columnsTeleop}

            >

            </DataGrid>
        </div>
    )
}

export default TeamProfile;