import classes from './contact.module.css';
import Footer from './footer';
import Navbar from './Navbar';
import Sponsor from './sponsor';
import 'font-awesome/css/font-awesome.min.css';
const Contact = () => {
    return (
        <div className={classes.daddy}>
            <div className={classes.section}>
                <Navbar mode="dark" />
                <div className={classes.container}>
                    <div className={classes.content_section}>
                        <div className="title">
                            <h1>CONTACT US</h1>
                        </div>
                        <div className={classes.content}>
                            <h3>Address :</h3>
                            <p>BCCI-IPL</p>
                            <p> 4th Floor, Cricket Centre.</p>
                            <p> Wankhede Stadium</p>
                            <p> 'D' Road, Churchgate</p>
                            <p> Mumbai - 400020 India</p>
                            <h3>Contact Number :</h3>
                            <p> T +91 22 22800300</p>
                            <p> T +91 22 22800300</p>
                            <p> F +91 22 22800354</p>
                        </div>
                        <div className={classes.social}>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={classes.image_section}>
                        <img src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef204bb10b93fdbe5e601bb_contact-2860030_1920-1024x683.jpg"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contact;