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

    useEffect(() => {
        let teams =  JSON.parse(localStorage.getItem('teamList'));
        console.log(teams);
        teams.forEach(element => {
            let teamData = JSON.parse(localStorage.getItem(`${element}`));
            console.log(teamData);
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