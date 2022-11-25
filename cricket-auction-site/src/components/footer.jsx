import Styles from './footer.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className={Styles.components}>
            <div className={Styles.footer}>
                <h1>Teams</h1>
                <Link to='/team/:Chennai_Super_Kings' className={Styles.link}> <h3>Chennai Super Kings</h3></Link>
                <Link to='/team/:Royal_challengers_bangalore' className={Styles.link}> <h3>Royal Challengers Bangalore</h3></Link>
                <Link to='/team/:Mumbai_Indians' className={Styles.link}> <h3>Mumbai Indians</h3></Link>
                <Link to='/team/:Lucknow_Super_Giants' className={Styles.link}><h3>Lucknow Super Giants</h3></Link>
                <Link to='/team/:Sunrisers_Hyderabad' className={Styles.link}><h3>Sunrisers Hyderabad</h3></Link>
            </div>
            <div className={Styles.footer}>
                <h1>About</h1>
                <Link to='/About_us' className={Styles.link}><h3>About us</h3></Link>
            </div>
            <div className={Styles.footer}>
                <h1>Contact</h1>
                <Link to='/Contact_us' className={Styles.link}><h3>Contact us</h3></Link>
            </div>
        </div >
    )
}

export default Footer;