import Styles from './soldPlayers.module.css'
import { useContext } from 'react'
import Sold from './sold'
import SoldPlayerContext from '../components/soldPlayerContext'
const SoldPlayers = () => {
    const soldContext = useContext(SoldPlayerContext);
    return (
        <div className={Styles.parent}>
            <div className={Styles.icons}>
                <a href='#CHENNAI SUPER KINGS'><img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644311961_CSKroundbig.png" className={Styles.images}></img></a>
                <a href='#LUCKNOW SUPER GIANTS'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644487352_lsgrounding.png'></img></a>
                <a href='#ROYAL CHALLENGERS BANGALORE'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312253_RCBroundbig.png'></img></a>
                <a href='#MUMBAI INDIANS'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312227_MIroundbig.png'></img></a>
                <a href='#SUNRISERS HYDERABAD'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312281_SRHroundbig.png'></img></a>
            </div>
            <div>
                <Sold name='CHENNAI SUPER KINGS' players={soldContext.players} address="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644311961_CSKroundbig.png" />
                <Sold name='LUCKNOW SUPER GIANTS' players={soldContext.players} address="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644487352_lsgrounding.png" />
                <Sold name='ROYAL CHALLENGERS BANGALORE' players={soldContext.players} address="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312253_RCBroundbig.png" />
                <Sold name='MUMBAI INDIANS' players={soldContext.players} address="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312227_MIroundbig.png" />
                <Sold name='SUNRISERS HYDERABAD' players={soldContext.players} address="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1644312281_SRHroundbig.png" />
            </div>
        </div>
    )
}

export default SoldPlayers;