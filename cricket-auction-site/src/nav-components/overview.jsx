import Styles from './overview.module.css'
import { useContext } from 'react';
import TeamContext from '../components/teamContext';
const Overview = () => {
    const teamContext = useContext(TeamContext)

    return (
        <div className={Styles.parent}>
            <div className={Styles.overview}>
                <h1 className={Styles.heading}>Team</h1>
                <h1 className={Styles.heading}>Funds Remaining</h1>
                <h1 className={Styles.heading}>Overseas Players</h1>
                <h1 className={Styles.heading}>Titles</h1>
            </div>
            <div className={Styles.team}>
                {
                    teamContext.team.map((t) => {
                        return (
                            <div className={Styles.row} key={t.id}>
                                <div className={Styles.cell}><h2>{t.name}</h2></div>
                                <div className={Styles.cell}><h2>{t.funds}</h2></div>
                                <div className={Styles.cell}><h2>{t.oplayers}</h2></div>
                                <div className={Styles.cell}><h2>{t.titles}</h2></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overview;