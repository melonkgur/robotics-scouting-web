import { makeStyles } from "@material-ui/core/styles";
import Popup from "reactjs-popup";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import QrReader from "react-qr-scanner";
import CloseIcon from '@mui/icons-material/Close';
import '../fonts.css';


const useStyles = makeStyles(theme => ({
    addDataButton: {
        backgroundColor: '#ffffff',
        color: '#000000',
        textTransform: 'none',
        '&:hover': {
            background: "#E879F9",
            color: '#ffffff'
        },
        fontFamily: 'medium',
    },
    popupBackground: {
        backgroundColor: '#000000b3',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    exitButton: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        '&:hover': {
            background: "#8892B0",
        }
    }
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
                    <IconButton color="secondary" className={classes.exitButton}>
                        <CloseIcon onClick={popupShow} />
                    </IconButton>
                    <QrReader
                        onError={handleError}
                        onScan={(result) => {
                            if(props.qrData !== result && result != null) {
                                console.log(result.text);
                                //stores the qr code data in the local storage
                                let data = JSON.parse(result.text);
                                console.log(data);
                                let name = data.teamId;

                                //check if the team list exsists
                                if(localStorage.getItem("teamList") === null) {
                                    let teamList = [];
                                    localStorage.setItem("teamList", JSON.stringify(teamList));
                                }

                                if(localStorage.getItem(name) === null) {
                                    let oldTeamList = JSON.parse(localStorage.getItem('teamList'));
                                    console.log(oldTeamList, name);
                                    oldTeamList.push(JSON.parse(name));
                                    
                                    localStorage.setItem('teamList', `${JSON.stringify(oldTeamList)}`);
                                    localStorage.setItem(name, `[${JSON.stringify(data)}]`);
                                }
                                else {
                                    let oldData = JSON.parse(localStorage.getItem(name));
                                    oldData.push(data);
                                    localStorage.setItem(name, JSON.stringify(oldData));
                                }
                                popupShow();
                                window.location.reload();
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