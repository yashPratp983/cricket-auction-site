import Styles from './unsoldPlayers.module.css'
import { useContext } from 'react';

import UnsoldPlayerContext from '../components/unsoldContext';
const UnsoldPlayers = () => {
    const unsold = useContext(UnsoldPlayerContext);

    return (
        <div className={Styles.parent}>
            <div className={Styles.unsold}>
                <h1 className={Styles.heading}>Player</h1>
                <h1 className={Styles.heading}>Nationality</h1>
                <h1 className={Styles.heading}>Type</h1>
                <h1 className={Styles.heading}>Price</h1>
            </div>
            <div className={Styles.team}>
                {
                    unsold.unsoldPlayer.map((t) => {
                        return (
                            <div className={Styles.row} key={t.id}>
                                <div className={Styles.cell}><h2>{t.player_name}</h2></div>
                                <div className={Styles.cell}><h2>{t.nationality}</h2></div>
                                <div className={Styles.cell}><h2>{t.type}</h2></div>
                                <div className={Styles.cell}><h2>{t.base_price}</h2></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default UnsoldPlayers;