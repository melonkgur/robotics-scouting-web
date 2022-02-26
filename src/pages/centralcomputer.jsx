import { makeStyles } from "@material-ui/core";
import { Button } from '@material-ui/core';
import HomeButton from "../components/homebutton";
import { useState } from "react";
import QrReader from 'react-qr-scanner';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    },


}))


const CentralComputer = () => {

    const classes = useStyles();

    const [qrData, setQrData] = useState({ test: 'lol' });
    const [qrScanShow, setQrScanShow] = useState('none');

    const previewStyle = {
        height: '700',
        width: '1000',
        display: `${qrScanShow}`,
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
            <Button onClick={e => {
                setQrScanShow('block')
            }}>Import QrCode</Button>
            <QrReader
                delay={1000}
                onError={handleError}
                onScan={handleScan}
                style={previewStyle}
            >

            </QrReader>
        </div>
    )
}

export default CentralComputer;