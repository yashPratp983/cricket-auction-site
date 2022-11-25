import Styles from './navbar.module.css'
import { Link } from "react-router-dom";
import { useAuth } from './auth';
const navbar = (props) => {
    const auth = useAuth();
    return (
        <div className={Styles.navbar}>
            <div className={Styles.heading}>
                <h1 style={props.mode == "dark" ? { color: 'black' } : null}>CRICKET AUCTION</h1>
            </div>
            <div className={Styles.links}>
                <Link to='/' className={Styles.link} style={props.mode == "dark" ? { color: 'black' } : null}>Home</Link>
                {!auth.user ? <Link to='/login' className={Styles.link} style={props.mode == "dark" ? { color: 'black' } : null}>Login</Link> : null}
                <Link to='/bid' className={Styles.link} style={props.mode == "dark" ? { color: 'black' } : null}>Bid</Link>
            </div>
        </div>
    )
}

export default navbar;