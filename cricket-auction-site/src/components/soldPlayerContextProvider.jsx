import { useState, useEffect } from "react";
import SoldPlayerContext from "./soldPlayerContext";
import useApi from '../hooks/useHttps';

const soldPlayerContext = (props) => {
    const { isLoading, error, sendRequest: fetchTasks } = useApi();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const transformUser = (userObj) => {
            const loadedUsers = [];

            for (let userKey = 0; userKey < userObj.length; userKey++) {
                loadedUsers.push({ player_id: userObj[userKey].player_id, player_name: userObj[userKey].player_name, team_name: userObj[userKey].team_name, type: userObj[userKey].type, nationality: userObj[userKey].nationality, wickets: userObj[userKey].wickets, runs: userObj[userKey].runs, no_of_matches: userObj[userKey].no_of_matches });
            }
            console.log(userObj)

            setPlayers(loadedUsers);
        };

        fetchTasks(
            { url: 'http://localhost:3001/soldplayers' },
            transformUser
        );
    }, [fetchTasks]);

    const playerHandler = (details) => {
        const update = players;
        update.push(details);
        setPlayers(update);
    }
    return (
        <SoldPlayerContext.Provider value={{ players: players, updatePlayer: playerHandler }}>
            {props.children}
        </SoldPlayerContext.Provider>
    )
}

export default soldPlayerContext;