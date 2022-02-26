import { makeStyles } from "@material-ui/core";
import { Button } from '@material-ui/core';
import Counter from "../components/counter"
import { useState } from 'react';
import Popup from 'reactjs-popup';
import HomeButton from "../components/homebutton";
import QRCode from "react-qr-code";

const useStyles = makeStyles( theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    },
    popupBackground: {
        backgroundColor: '#000000b3',
        height: '100vh',
        width: '100vw'
    },
    popupMain: {
        backgroundColor: '#a000a0',
        width: '15em',
        height: '15em',
        borderWidth: '4px',
        borderRadius: '20px',
        marginLeft: '20em',
    },
    generator: {
        backgroundColor: '#af00af',
        marginTop: '1em',
        fontSize: '20px',
        marginLeft: '32em'
    }
}));

let data = {
    'lowGoal': null,
    'highGoal': null
}
let jsonQR;

function createJson(p_lowGoal, p_highGoal){
    data = {
        'lowGoal': p_lowGoal,
        'highGoal': p_highGoal
    }
    jsonQR = JSON.stringify(data);
}

const Scout = () => {

    const [lowGoal, setLowGoal] = useState(0);
    const [highGoal, setHighGoal] = useState(0);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeButton />
            <div>
            <Counter title="Im not high" setter={setLowGoal}/>
            <Counter title="Im hithg" setter={setHighGoal}/>
            </div>
            <Popup
                modal
                nested
                trigger={
                    <Button className={classes.generator} onclick={createJson(lowGoal, highGoal)}>
                        Generate QR Code
                    </Button>
                }
            >
                {popupShow =>
                    <div className={classes.popupBackground}>
                        <div className={classes.popupMain}>
                            <QRCode value={jsonQR} title="jordanoutput"/>
                            <button onClick={popupShow}>
                                close
                            </button>
                        </div>
                    </div>
                }
            </Popup>
        </div>
    )
}

export default Scout;