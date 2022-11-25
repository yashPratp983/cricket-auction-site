import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
const auth = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('owners'));
    const [team, setTeam] = useState(JSON.parse(localStorage.getItem("team_id")));
    const login = (users, team) => {
        setUser(users);
        setTeam(team);
        console.log(users);
        console.log(team);
    }
    const logout = () => {
        setUser(null);
        setTeam(null);
    }
    return (
        <AuthContext.Provider value={{ logout, login, user, team }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default auth;