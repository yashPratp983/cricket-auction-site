import React from "react";
const SoldPlayerContext = React.createContext({
    player: [],
    updatePlayer: (details) => { }
})

export default SoldPlayerContext;