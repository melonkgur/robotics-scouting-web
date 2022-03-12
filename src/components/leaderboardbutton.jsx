import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import { useState } from 'react';

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const useStyles = makeStyles(theme => ({
    leaderboardButton: {
        backgroundColor: '#3256a8',
        color: '#ffffff',
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        '&:hover': {
            backgroundColor: '#3256a8'
        }
    }
}))

const LeaderboardButton = () => {

    const classes = useStyles();


    return (
        <a href="/#/leaderboard">
            <Button variant="contained" className={classes.leaderboardButton}>
                Leaderboard Averages
            </Button>

        </a>
    )
}

export default LeaderboardButton;