import Styles from './login.module.css'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom';
import useApi from '../hooks/useHttps';
const login = () => {
    const { isLoading, error, sendRequest: fetchTasks } = useApi();
    const location = useLocation();
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
    const redirectPath = location.state?.path || '/bid'

    useEffect(() => {
        const transformUser = (userObj) => {
            const loadedUsers = [];

            for (let userKey = 0; userKey < userObj.length; userKey++) {
                loadedUsers.push({ id: userObj[userKey].team_id, userName: userObj[userKey].user_id, password: userObj[userKey].user_pass, team: userObj[userKey].team_id });
            }
            console.log(userObj)

            setUsers(loadedUsers);
        };

        fetchTasks(
            { url: 'http://localhost:3001/user' },
            transformUser
        );
    }, [fetchTasks]);


    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === name && users[i].password === password) {
                auth.login({ name: name }, users[i].team);
                setName('');
                setPassword('');
                navigate(redirectPath, { replace: true })
                localStorage.setItem("owners", JSON.parse(JSON.stringify(name)));
                localStorage.setItem("team_id", JSON.parse(JSON.stringify(users[i].team)));
            }
        }

    }

    return (
        <div className={Styles.parent}>
            <Navbar mode="dark" />
            <div className={Styles.login}>

                <form className={Styles.form} onSubmit={submitHandler}>
                    <h2>Login</h2>
                    <input type='text' placeholder='username' onChange={nameHandler} value={name}></input>
                    <input type='password' placeholder="password" onChange={passwordHandler} value={password}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default login;