import React from "react";
const UnsoldPlayerContext = React.createContext({
    unsoldPlayer: [],
    updateUnsoldPlayer: (details) => { }
})

export default UnsoldPlayerContext;