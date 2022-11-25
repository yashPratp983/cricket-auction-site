import Styles from './team.module.css'
import { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { useParams } from 'react-router-dom';
import Sponsor from './sponsor'
import React from 'react';
import Card from './captainCard';
import TeamContext from './teamContext';
import SoldPlayerContext from './soldPlayerContext';
const team = () => {
    const soldContext = useContext(SoldPlayerContext);
    const params = useParams();
    const teamContext = useContext(TeamContext)
    let teamName = params.team_name.replace('_', ' ');
    teamName = teamName.replace(':', '');
    teamName = teamName.replace('_', ' ');
    teamName = teamName.toUpperCase();
    console.log(teamName);

    let image, captainImage;
    if (teamName == 'CHENNAI SUPER KINGS') {
        image = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644311961_CSKroundbig.png"
        captainImage = 'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
    }
    else if (teamName == 'ROYAL CHALLENGERS BANGALORE') {
        image = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312253_RCBroundbig.png"
        captainImage = "https://wisden.com/wp-content/uploads/2017/11/GettyImages-689381236-e1517238885876.jpg"
    }
    else if (teamName == 'MUMBAI INDIANS') {
        image = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312227_MIroundbig.png"
        captainImage = "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171004/sachin-tendulkar.jpg"
    }
    else if (teamName == 'SUNRISERS HYDERABAD') {
        image = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312281_SRHroundbig.png"
        captainImage = "https://icccricketschedule.gumlet.io/wp-content/uploads/2020/01/Kane-Williamson-640x360.jpg?compress=true&quality=80&w=640&dpr=1.0"
    }
    else if (teamName == 'LUCKNOW SUPER GIANTS') {
        image = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644487352_lsgrounding.png"
        captainImage = "https://cricgram.b-cdn.net/wp-content/uploads/2019/08/KL-Rahul-768x768.jpg"
    }
    let cap;
    teamContext.team.map((t) => {
        if (t.name == teamName) {
            cap = t.captain;
        }
    })
    return (
        <React.Fragment>
            <div className={Styles.top}>
                <Navbar />
                <div className={Styles.card}>
                    <Card captain={cap} captainImage={captainImage} />
                    <img src={image} className={Styles.images}></img>
                </div>
            </div>
            <div className={Styles.components}>
                <div className={Styles.unsold}>
                    <h1 className={Styles.heading}>Owner</h1>
                    <h1 className={Styles.heading}>Captain</h1>
                    <h1 className={Styles.heading}>Titles</h1>
                </div>
                {
                    teamContext.team.map((t) => {
                        if (t.name == teamName) {
                            return (
                                <div className={Styles.team}>
                                    <div className={Styles.row} key={t.id}>
                                        <div className={Styles.cell}><h2>{t.owner}</h2></div>
                                        <div className={Styles.cell}><h2>{t.captain}</h2></div>
                                        <div className={Styles.cell}><h2>{t.titles}</h2></div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className={Styles.components}>
                <div className={Styles.sold}>
                    <h1 className={Styles.heading}>Player</h1>
                    <h1 className={Styles.heading}>Nationality</h1>
                    <h1 className={Styles.heading}>Type</h1>
                    <h1 className={Styles.heading}>Matches</h1>
                </div>
                <div className={Styles.team}>
                    {
                        soldContext.players.map((t) => {
                            if (t.team_name == teamName) {
                                return (
                                    <section className={Styles.row} key={t.player_id}>
                                        <div className={Styles.cell}><h2>{t.player_name}</h2></div>
                                        <div className={Styles.cell}><h2>{t.nationality}</h2></div>
                                        <div className={Styles.cell}><h2>{t.type}</h2></div>
                                        <div className={Styles.cell}><h2>{t.no_of_matches}</h2></div>
                                    </section>

                                )
                            }
                        })
                    }
                </div>
            </div>
            <Sponsor />
            <Footer />
        </React.Fragment>
    )
}

export default team;