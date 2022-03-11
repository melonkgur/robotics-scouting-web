import  { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import BackButton from "../components/backbutton";
import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import '../fonts.css';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
}))


const TeamProfile = () => {

    const teamNumber = useParams();
    const classes = useStyles();

    const [teamData, setTeamData] = useState();

    const [autoColumnDefs] = useState([
        { field: "Match Number", sortable: true, filter: true },
        { field: "High Goal Teleop", sortable: true, filter: true },
        { field: "Low Goal Teleop", sortable: true, filter: true },
        { field: "Rung Climbed To", sortable: true, filter: true },
        { field: "Notes", sortable: true, filter: true, width: 400 }
    ]); 

    const [autoRowData] = useState([
        { "Match Number": 5, "High Goal Teleop": 3, "Low Goal Teleop": 7, "Rung Climbed To": "Mid", "Notes": "Had troubles climbing towards the end" }
    ])

    const [teleopColumnDefs] = useState([
        { field: "Match Number", sortable: true, filter: true },
        { field: "High Goal Auto", sortable: true, filter: true },
        { field: "Low Goal Auto", sortable: true, filter: true },
        { field: "Time To Taxi", sortable: true, filter: true },
        { field: "Notes", sortable: true, filter: true, width: 400 }
    ]);

    const [teleopRowData] = useState([
        { "Match Number": 4, "High Goal Auto": 5, "Low Goal Auto": 3, "Time To Taxi": 10, Notes: "Intake bed, can't cycle effeciently" }
    ]);


    useEffect(() => {
        let data = [];
        data = localStorage.getItem(`${teamNumber}`);
        setTeamData(data);
    }, []);


    return (
        <div className={classes.root}>
            {/*Fetches localstorage data depending on the team (react-router)*/}
            <BackButton title="Team List" lastPage="/#/central-computer" />
            <div className="ag-theme-alpine-dark" style={{height: 200, width: 1200, marginTop: '10%'}}>
                <AgGridReact 
                    rowData={teleopRowData}
                    columnDefs={teleopColumnDefs}
                />
            </div>
            <div className="ag-theme-alpine-dark" style={{height: 200, width: 1200, marginTop: '4%'}}>
                <AgGridReact 
                    columnDefs={autoColumnDefs}
                    rowData={autoRowData}
                />
            </div>

        </div>
    )
}

export default TeamProfile;