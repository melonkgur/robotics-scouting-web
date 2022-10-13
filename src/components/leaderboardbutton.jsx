import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import { useState } from 'react';

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const useStyles = makeStyles(theme => ({
    leaderboardButton: {
        textTransform: 'none',
        backgroundColor: '#ffffff',
        color: '#000000',
        '&:hover': {
            backgroundColor: '#E879F9',
            color: '#ffffff'
        }
    }
}))

const LeaderboardButton = () => {

    const classes = useStyles();


    return (
        <a style={{ textDecoration: 'none' }} href="/#/leaderboard">
            <Button variant="contained" className={classes.leaderboardButton}>
                Leaderboard Averages
            </Button>

        </a>
    )
}

export default LeaderboardButton;