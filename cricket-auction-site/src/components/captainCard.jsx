import Styles from './captainCard.module.css'

const cart = (props) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.image} style={{ backgroundImage: `url(${props.captainImage})` }}></div>
            <div className={Styles.description}>
                <p className={Styles.name}>{props.captain}</p>
                <p className={Styles.describe}>Right Hand Batsman</p>
            </div>
        </div>
    )
}

export default cart;