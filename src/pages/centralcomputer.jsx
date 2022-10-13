import { makeStyles } from "@material-ui/core";
import BackButton from "../components/backbutton";
import { useEffect, useState } from "react";
import QrCodePopup from "../components/qrcodepopup";
import ClearStorage from "../components/clearstorage";
import TeamGrid from "../components/team-grid";
import LeaderboardButton from "../components/leaderboardbutton";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '200vh',
        backgroundColor: theme.palette.primary.main,
    },
    navbarButtons: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem'
    },
    addDataButton: {
        backgroundColor: '#32a852',
        color: '#ffffff',

    },
    popupBackground: {
        backgroundColor: '#000000b3',
        height: '100vh',
        width: '100vw'
    },
    searchField: {
        width: '20rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
        margin: '3rem'
    },
    mainContent: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
    },
    buttons: {
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '37vw',
        display: 'flex',
        justifyContent: 'space-between'
    }

}))


const CentralComputer = () => {

    const classes = useStyles();


    const [qrData, setQrData] = useState({ test: 'lol' });

    const [searchParam, setSearchParam] = useState('');


    return (
        <div className={classes.root}>
            <BackButton title={'Home'} lastPage={'/'} />
            <div className={classes.buttons}>
                <LeaderboardButton />
                <ClearStorage />
                <QrCodePopup qrData={qrData} setQrData={setQrData} />
            </div>

            <div className={classes.mainContent}>
                <input type="text" placeholder="Search Team" className={classes.searchField} onChange={e => setSearchParam(e.target.value)} />
            </div>
            <TeamGrid searchField={searchParam} />
        </div>
    )
}

export default CentralComputer;