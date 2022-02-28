import { makeStyles } from "@material-ui/core/styles";
import Popup from "reactjs-popup";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import QrReader from "react-qr-scanner";


const useStyles = makeStyles(theme => ({
    addDataButton: {
        backgroundColor: '#32a852',
        color: '#ffffff',
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        '&:hover': {
            background: "#32a852",
        }
    },
    popupBackground: {
        backgroundColor: '#000000b3',
        height: '100vh',
        width: '100vw'
    },
}));

const QrCodePopup = (props) => {


    const handleError = (er) => {
        console.log(er);
    }


    const classes = useStyles();

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
                            if(props.qrData !== result && result != null) {

                                //stores the qr code data in the local storage
                                let data = JSON.parse(result);
                                let name = data.teamName;
                                localStorage.setItem(name, result.toString());
                                
                                props.setQrData(result);
                                popupShow();
                            }
                    
                        }}
                    >
                    </QrReader>
                </div>
            }

        </Popup>
    )
}

export default QrCodePopup;