import { makeStyles } from "@material-ui/core";
import { Button } from '@material-ui/core';
import Counter from "../components/counter"
import { useState } from 'react';
import Popup from 'reactjs-popup';
import HomeButton from "../components/homebutton";
import QRCode from "react-qr-code";
//import { contextBridge } from "electron/renderer";

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
        width: '20em',
        height: '20em',
        padding: '10px',
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

function saveQR(){
    //taken from github react-qr-code page. i dont how someone firgured out 
    //that this is how to do this in the first place
    const svg = document.getElementById("codeQR");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "codeQR";
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
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
                            <QRCode id="codeQR" value={jsonQR} title="jordanoutput"/>
                            <button onClick={popupShow}>
                                close
                            </button>
                            <button onClick={saveQR}>
                                download as png
                            </button>
                        </div>
                    </div>
                }
            </Popup>
        </div>
    )
}

export default Scout;