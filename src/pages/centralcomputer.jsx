import { makeStyles } from "@material-ui/core";
import { Button } from '@material-ui/core';
import HomeButton from "../components/homebutton";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import QrReader from 'react-qr-scanner';
import Popup from 'reactjs-popup';



const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
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
    }

}))


const CentralComputer = () => {

    const classes = useStyles();


    const [qrData, setQrData] = useState({ test: 'lol' });

    const handleError = (err) => {
        console.log(err);
    }


    return (
        <div className={classes.root}>
            <HomeButton />
            <div className={classes.navbarButtons}>
                <Popup
                    modal
                    nested
                    trigger={
                        <Button
                            variant="contained"

                            className={classes.addDataButton}
                            endIcon={<AddIcon />}
                        >Import QrCode</Button>
                    }
                >

                    {popupShow => 
                        <div className={classes.popupBackground}>
                            <button onClick={popupShow}>close</button>
                            <QrReader
                                onError={handleError}
                                onScan={(result) => {
                                    if(qrData !== result && result != null) {
                                        setQrData(result);
                                        popupShow();
                                    }
                            
                                    console.log(qrData);
                                }}
                            >
                            </QrReader>
                        </div>
                    }

                </Popup>

            </div>
        </div>
    )
}

export default CentralComputer;