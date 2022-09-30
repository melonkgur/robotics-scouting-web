// using recharts for charting i guess. looked good and was the first one
// api docs: https://recharts.org/en-US/api
//
// click "show data format" in corner of code examples to see data format.


import BackButton from "../components/backbutton";
import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'; // FOUND ONE
import '../fonts.css';
import { makeStyles } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
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
    },
    searchField: {
        width: '20rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
        margin: '3rem'
    },
    mainContent: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '37vw',
        display: 'flex',
        justifyContent: 'space-between'
    }, 
    sectionTitle: {
        color: '#ffffff',
        fontFamily: 'medium',
        marginTop: '30rem',
        textAlign: 'center'
    }

}));

const DataGraphs = () => {

    let data = [
        {
            xAxis: 0,
            a: 0,
            b: 0
        },
        {
            xAxis: 1,
            a: 1,
            b: 2
        },
        {
            xAxis: 2,
            a: 15,
            b: 27
        },
        {
            xAxis: 3,
            a: 2,
            b: 2
        },
    ];

    const classes = useStyles();

    const makeGraphData = (rawArray) => {
        const badIdea = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z'
        ];

        const worseIdea = [
            "#f00",
            "#0f0",
            "#00f",
            "#f0f",
            "#ff0",
            "#0ff",
            "#fff",
            "#000"
        ];

        let midString = ""
        
        let dat = [];

        for (let i = 0; i < rawArray.length; i++) {
            dat.push(<Line type="monotone" dataKey={badIdea[i]} stroke={worseIdea[i]} />);
            midString += `
                "${badIdea[i]}": ${rawArray[i]},
            `;
        }

        //data = dat

    }

    return (
        <div className={classes.root}>
            <BackButton title={'Home'} lastPage={'/'} />
            <div className={classes.mainContent}>
                <Typography variant="h2" classes={classes.sectionTitle}>txt</Typography>
                <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="5 3" />
                    <XAxis dataKey="xAxis" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {() => {
                        
                    }}

                    

                    {/*<Line type="monotone" dataKey="a" stroke="#8884d8" />
                    <Line type="monotone" dataKey="b" stroke="#82ca9d" />*/}
                </LineChart>
            </div>
        </div>
    )
}

export default DataGraphs;