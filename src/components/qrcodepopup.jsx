import { makeStyles } from "@mui/material";
import Popup from "reactjs-popup";


const useStyles = makeStyles(theme => ({
    addDataButton: {
        backgroundColor: '#32a852',
        color: '#ffffff',

    },
    popupBackground: {
        backgroundColor: '#000000b3',
        height: '100vh',
        width: '100vw'
    },
}));

const QrCodePopup = () => {
    return (
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
    )
}

export default QrCodePopup;