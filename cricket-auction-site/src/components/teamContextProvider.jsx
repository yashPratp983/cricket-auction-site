import { useState, useEffect } from "react";
import TeamContext from "./teamContext";
import useApi from '../hooks/useHttps';
const teamContext = (props) => {
    const { isLoading2, error2, sendRequest: fetchTasks2 } = useApi();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const transformUser = (userObj) => {
            const loadedUsers = [];

            for (let userKey = 0; userKey < userObj.length; userKey++) {
                loadedUsers.push({ id: userObj[userKey].team_id, name: userObj[userKey].team_name, oplayers: userObj[userKey].no_of_overseas, funds: userObj[userKey].balance, titles: userObj[userKey].no_of_titles, captain: userObj[userKey].Captain, owner: userObj[userKey].owner });
            }
            console.log(userObj)

            setTeam(loadedUsers);
        };

        fetchTasks2(
            { url: 'http://localhost:3001/team' },
            transformUser
        );
    }, [fetchTasks2]);

    const teamHandler = (details, tm) => {
        let update = team;
        console.log(team.length)
        let c = 0;
        for (let i = 0; i < team.length; i++) {
            if (team[i].id == tm) {
                update[i].funds = update[i].funds - details.base_price;
                c++;
            }
        }
        console.log(c)
        setTeam(update);
    }
    return (
        <TeamContext.Provider value={{ updateTeam: teamHandler, team: team }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default teamContext;