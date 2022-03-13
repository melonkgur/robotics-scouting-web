import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import TeamGridItem from "./team-grid-item";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    teamGrid: {
        width: '70vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px',
        margin: '0 auto'
    }
}))


const TeamGrid = (props) => {

    const classes = useStyles();

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        let teamList = [];
        if(localStorage.getItem('teamList') != null) {
            teamList = JSON.parse(localStorage.getItem('teamList'));
        }
        setTeams(teamList);
    }, []);

    let getTeamNickName = async (teamNumber) => {
        let teamNickName = '';
        await axios.get(`https://www.thebluealliance.com/api/v3/team/frc${teamNumber}`, {
            headers:  {
                'X-TBA-Auth-Key': '2RlFFFGFtkzhlFVcMD2dsNKcTO12lBqHbz7ZIwVaqLfSK0xtsv8TAZngRZOFc5E7'
            }
        }).then(res => teamNickName = res.data.nickname);
        console.log(teamNickName);
        return teamNickName;
    }

    const filtedTeams = teams.filter(  (team) => {
        return team.toString().includes(props.searchField);
    })

    return (
        <div className={classes.teamGrid}>
            {filtedTeams.map(team => {
                return (
                    <TeamGridItem team={team} />
                )
            })}
        </div>
    )
}

export default TeamGrid;