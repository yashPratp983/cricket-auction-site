import React from "react";
const TeamContext = React.createContext({
    team: [],
    updateTeam: (details) => { }
})

export default TeamContext;