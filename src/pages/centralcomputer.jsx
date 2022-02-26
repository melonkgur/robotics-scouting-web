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
    const [qrScanShow, setQrScanShow] = useState('flex');

    const previewStyle = {
        height: '700',
        width: '1000',
        display: `${qrScanShow}`,
        margin: '0',
        padding: '0',
    }

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = (result) => {
        if(qrData !== result && result != null) {
            setQrData(result);
            setQrScanShow('none');
        }
        console.log(qrData);
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
                            onClick={e => {
                                window.location = '/#/import-data'
                            }}
                            className={classes.addDataButton}
                            endIcon={<AddIcon />}
                        >Import QrCode</Button>
                    }
                >

                    {close => (
                        <div className={classes.popupBackground}>
                            <button onClick={close}>close</button>
                        </div>
                    )}

                </Popup>

            </div>
        </div>
    )
}

export default CentralComputer;