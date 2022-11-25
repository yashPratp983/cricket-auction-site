import { useAuth } from "./auth";
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import Styles from './bid.module.css'
import Footer from './footer.jsx'
import React from "react";
import Sponsor from "./sponsor";
import { useContext, useEffect, useState } from "react";
import TeamContext from "./teamContext";
import UnsoldPlayerContext from "./unsoldContext";
import SoldPlayerContext from "./soldPlayerContext";
import useApi from "../hooks/useHttps";

const bid = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const teamContext = useContext(TeamContext);
    const unsold = useContext(UnsoldPlayerContext);
    const sold = useContext(SoldPlayerContext)
    const auth = useAuth();

    const { isLoading, error, sendRequest: fetchTasks } = useApi();
    const demo = useApi();
    console.log(teamContext);
    console.log(auth.team)

    const clickHandler = () => {
        auth.logout();
        localStorage.removeItem('owners');
        localStorage.removeItem('team_id');
        navigate('/', { replace: true });
    }

    let teamName;
    let funds;
    let owner;
    for (let i = 0; i < teamContext.team.length; i++) {
        if (teamContext.team[i].id == auth.team) {
            teamName = teamContext.team[i].name;
            funds = teamContext.team[i].funds;
            owner = teamContext.team[i].owner;
        }
    }

    const clickHandler2 = (event) => {
        console.log(event.target.value)
        let d;
        for (let i = 0; i < unsold.unsoldPlayer.length; i++) {
            if (event.target.value == unsold.unsoldPlayer[i].player_id) {
                d = unsold.unsoldPlayer[i];
            }
        }
        unsold.updateUnsoldPlayer(d)

        teamContext.updateTeam(d, auth.team);
        d = { ...d, team_name: teamName }

        const request = {
            method: 'POST',
            body: { team_id: auth.team, base_price: d.base_price },
            url: 'http://localhost:3001/update',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        demo.sendRequest(request, '')

        const request2 = {
            method: 'POST',
            body: { num: event.target.value },
            url: 'http://localhost:3001/unsoldplayers',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetchTasks(request2, '')

        delete d.base_price
        sold.updatePlayer(d);
        setData(d);

        console.log(d);
    }

    useEffect(() => {
        const request = {
            method: 'POST',
            body: data,
            url: 'http://localhost:3001/soldplayers',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetchTasks(request, '')


    }, [data])

    return (
        <React.Fragment>
            <div className={Styles.bidding}>
                <Navbar />
                <div className={Styles.bid}>
                    <div className={Styles.header}>
                        <h1 className={Styles.bigHeading}>{owner}</h1>
                        <h1 className={Styles.bigHeading}>{teamName}</h1>
                        <h1 className={Styles.bigHeading}>{funds}</h1>
                    </div>

                </div>
                <div className={Styles.parent}>
                    <div className={Styles.unsold}>
                        <h1 className={Styles.heading}>Player</h1>
                        <h1 className={Styles.heading}>Nationality</h1>
                        <h1 className={Styles.heading}>Price</h1>
                        <h1 className={Styles.heading}></h1>
                    </div>
                    <div className={Styles.team}>
                        {
                            unsold.unsoldPlayer.map((t) => {
                                return (
                                    <div className={Styles.row} key={t.player_id}>
                                        <div className={Styles.cell}><h2>{t.player_name}</h2></div>
                                        <div className={Styles.cell}><h2>{t.nationality}</h2></div>
                                        <div className={Styles.cell}><h2>{t.base_price}</h2></div>
                                        <button className={`${Styles.cell} ${Styles.buttonbid}`} onClick={clickHandler2} value={t.player_id}>Bid</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className={Styles.button} onClick={clickHandler}>Logout</button>

            </div>
            <Sponsor />
            <Footer />
        </React.Fragment>
    )
}

export default bid;