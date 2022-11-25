import Styles from './nav.module.css'
import { NavLink, Outlet } from 'react-router-dom';
const nav = () => {
    // const navlinkStyles = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         color: isActive ? 'purple' : 'rgba(2, 0, 36, 1)'
    //     }
    // }
    return (
        <div>
            <div className={Styles.nav}>
                <NavLink to='/overview' className={Styles.link}>Overview</NavLink>
                <NavLink to='/sold-players' className={Styles.link}>Sold Players</NavLink>
                <NavLink to='/unsold-players' className={Styles.link}>Unsold Players</NavLink>

            </div>
            <Outlet />
        </div>
    )
}

export default nav;