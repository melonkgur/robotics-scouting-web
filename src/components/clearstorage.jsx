import { Button, T } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Popup from 'reactjs-popup';


const useStyles = makeStyles(theme => ({
    clearStorageButton: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        backgroundColor: '#ff4f4fx'
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
        height: '40vh',
        width: '30vw',

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
                        
                    </div>
                </div>
            
        </Popup>
    )
}

export default ClearStorage;