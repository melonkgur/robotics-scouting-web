import { Button, T, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Popup from 'reactjs-popup';
import '../fonts.css';


const useStyles = makeStyles(theme => ({
    clearStorageButton: {
        backgroundColor: '#ffffff',
        color: '#000000',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#E879F9',
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
    popupMainContent: {
        backgroundColor: '#ffffff',
        height: '20vh',
        width: '20vw',
        borderRadius: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    popupTitle: {
        fontFamily: 'medium',
    },
    confirmationButton: {
        backgroundColor: '#32a852',
        color: '#ffffff',
        width: '50%',
        marginTop: '2rem',
        '&:hover': {
            background: "#32a852",
        }
    }
}))

const ClearStorage = () => {

    const classes = useStyles();

    return (
        <Popup
            modal
            nested
            trigger={
                <Button variant="contained" className={classes.clearStorageButton}>
                    Clear All Storage
                </Button>
            }
        >
            
                <div className={classes.popupBackground}>
                    <div className={classes.popupMainContent}>
                        <Typography variant='h4' className={classes.popupTitle}>
                            Are you sure you want to clear all storage?
                        </Typography>
                        <Button className={classes.confirmationButton} onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}>Yes, I'm sure</Button>
                    </div>
                </div>
            
        </Popup>
    )
}

export default ClearStorage;