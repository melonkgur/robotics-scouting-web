import BackButton from "../components/backbutton"
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import '../fonts.css';
import { forEach } from "async";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    teamOverviewTitle: {
        color: '#ffffff',
        marginTop: '5%',
        fontFamily: 'medium'
    }
}))


const Leaderboard = () => {

    const classes = useStyles();

    const [columnDefs, setColumnDefs] = useState([
        { field: "Team Number", sortable: true, filter: true, width: 150 },
        { field: "High Goal Auto Average", sortable: true, filter: true, width: 220 },
        { field: "Low Goal Auto Average", sortable: true, filter: true, width: 220 },
        { field: "High Goal Teleop Average", sortable: true, filter: true, width: 220 },
        { field: "Low Goal Teleop Average", sortable: true, filter: true, width: 220 },
        { field: "Climbpoint Average", sortable: true, filter: true, width: 220 }
    ]);

    const [rowDefs, setRowDefs] = useState([]);

    /* 
    JSON Format:
    {
        "High Goal Auto Average": fkjldasfda,
    }
    */

    useEffect(() => {
        let teams =  JSON.parse(localStorage.getItem('teamList'));
        console.log(teams);
        teams.forEach(element => {
            let teamData = JSON.parse(localStorage.getItem(`${element}`));
            let gamesPlayed = teamData.length;

            //Totals
            let HighGoalAutoTotal = 0;
            let LowGoalAutoTotal = 0;
            let HighGoalTeleopTotal = 0;
            let LowGoalTeleopTotal = 0;
            let ClimberPointsTotal = 0;

            teamData.forEach(game => {
                HighGoalAutoTotal += game.highGoalAuto;
                LowGoalAutoTotal += game.lowGoalAuto;
                HighGoalTeleopTotal += game.highGoalOperated;
                LowGoalTeleopTotal += game.lowGoalOperated;
            })
            console.log(teamData, element);

            let teamJSON = {
                "Team Number": element[0],
                "High Goal Auto Average": HighGoalAutoTotal/gamesPlayed,
                "Low Goal Auto Average": LowGoalAutoTotal/gamesPlayed,
                "High Goal Teleop Average": HighGoalTeleopTotal/gamesPlayed,
                "Low Goal Teleop Average": LowGoalTeleopTotal/gamesPlayed,
                "Climbpoint Average": ClimberPointsTotal/gamesPlayed

            };
            setRowDefs(rowDefs.concat(teamJSON));
            console.log(rowDefs);
        })

    }, [])

    return (
        <div className={classes.root}>
            <BackButton lastPage="/#/central-computer" title="Team List" />
            <Typography variant="h2" className={classes.teamOverviewTitle}>
                Team Overview
            </Typography>
            <div className="ag-theme-alpine-dark" style={{height: 600, width: 1200 }}>
                <AgGridReact 
                    columnDefs={columnDefs}
                    rowData={rowDefs}
                />
            </div>
        </div>
    )
}

export default Leaderboard;