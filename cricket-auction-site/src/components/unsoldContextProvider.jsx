import { useState, useEffect } from "react";
import UnsoldPlayerContext from "./unsoldContext";
import useApi from '../hooks/useHttps';

const UnsoldPlayerContextProvider = (props) => {
    const { isLoading, error, sendRequest: fetchTasks } = useApi();
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const transformUser = (userObj) => {
            const loadedUsers = [];

            for (let userKey = 0; userKey < userObj.length; userKey++) {
                loadedUsers.push({ player_id: userObj[userKey].player_id, player_name: userObj[userKey].player_name, type: userObj[userKey].type, nationality: userObj[userKey].nationality, base_price: userObj[userKey].base_price, wickets: userObj[userKey].base_price, runs: userObj[userKey].runs, no_of_matches: userObj[userKey].no_of_matches });
            }
            console.log(userObj)

            setPlayers(loadedUsers);
        };

        fetchTasks(
            { url: 'http://localhost:3001/unsoldplayers' },
            transformUser
        );
    }, [fetchTasks]);
    const updateHandler = (details) => {
        const update = players;
        let updatedPlayers
        updatedPlayers = update.filter((t) => {
            return (t.player_id !== details.player_id)
        })
        setPlayers(updatedPlayers);
        console.log("called")
    }
    return (
        <UnsoldPlayerContext.Provider value={{ unsoldPlayer: players, updateUnsoldPlayer: updateHandler }}>
            {props.children}
        </UnsoldPlayerContext.Provider>
    )
}

export default UnsoldPlayerContextProvider;