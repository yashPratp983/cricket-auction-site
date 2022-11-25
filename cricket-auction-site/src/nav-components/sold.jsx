import Styles from "./sold.module.css";
import React from "react";
const sold = (props) => {
    console.log(props.name);
    return (
        <React.Fragment>
            <div className={Styles.head}>
                <img src={props.address} className={Styles.images}></img>
                <h1>{props.name}</h1>
            </div>
            <div className={Styles.sold}>
                <h1 className={Styles.heading}>Player</h1>
                <h1 className={Styles.heading}>Nationality</h1>
                <h1 className={Styles.heading}>Type</h1>
                <h1 className={Styles.heading}>Matches</h1>
            </div>
            <div className={Styles.team}>
                {
                    props.players.map((t) => {
                        if (props.name == t.team_name) {
                            return (
                                <section className={Styles.row} id={props.name} key={t.player_id}>
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
        </React.Fragment>
    )
}
export default sold;