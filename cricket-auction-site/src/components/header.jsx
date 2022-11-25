import Styles from './header.module.css'
import Navbar from './Navbar'
const header = () => {
    return (
        <div className={Styles.header}>
            <Navbar />
        </div>
    )
}

export default header;