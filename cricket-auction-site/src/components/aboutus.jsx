import classes from './about-us.module.css';
import Footer from './footer';
import Navbar from './Navbar';
import Sponsor from './sponsor';
const About = () => {
    return (
        <div>
            <div className={classes.section} >
                <Navbar mode="dark" />

                <div className={classes.container}>
                    <div className={classes.content_section}>
                        <div className={classes.title}>
                            <h1>About Us</h1>
                        </div>
                        <div className={classes.content}>
                            <h3></h3>
                            <p>BCCI is the body responsible for the operation of the League and the Code of Conduct for Players
                                and
                                Team Officials (the “Code of Conduct”) is adopted and implemented as part of the BCCI’s
                                continuing
                                efforts to maintain the public image, popularity and integrity of the League by providing:</p>
                            <p>(a)
                                an effective
                                means to deter any participant or other relevant person from conducting themselves improperly on
                                and
                                off the ‘field-of-play’ or in a manner that is contrary to the ‘Spirit of Cricket’</p>
                            <p>(b)
                                a
                                robust disciplinary
                                procedure pursuant to which all matters of improper conduct can be dealt with fairly, with
                                certainty and
                                in an expeditious manner.
                                Unless otherwise indicated, references to Articles and Appendices are to articles and appendices
                                of the
                                Code of Conduct. Words in italicized text in the Code of Conduct are defined terms and their
                                definitions
                                are set out in Appendix 1.</p>
                            <h3>ARTICLE 1 SCOPE AND APPLICATION</h3>
                            <p>
                                1.1 All Players and Team Officials are automatically bound by and required to comply with all of
                                the
                                provisions of the Code of Conduct. Accordingly, by their participation (in the case of a Player)
                                or
                                assistance in a Player’s participation or other involvement (in the case of a Team Official) in
                                a Match
                                or IPL Event, such Players or Team Officials shall be deemed to have agreed:</p>
                            <p>
                                1.1.1 that it is their personal responsibility to familiarise themselves with all of the
                                requirements
                                of the Code of Conduct, including what conduct constitutes an offence under the Code of
                                Conduct;</p>
                            <p>
                                1.1.2 to submit to the exclusive jurisdiction of any Match Referee, Commission and Ombudsman
                                convened under the Code for Conduct to hear and determine charges brought pursuant to
                                the Code of Conduct (and any appeals in relation thereto); and</p>
                            <p>
                                1.1.3 not to bring any proceedings in any court or other forum that are inconsistent with the
                                foregoing submission to the jurisdiction of the Match Referee, Commission and Ombudsman.</p>
                            <p>
                                1.2 All Players and Team Officials shall continue to be bound by and required to comply with the
                                Code
                                of Conduct until three (3) months after the termination of his or her contract or other
                                arrangement
                                with a Franchisee and BCCI shall continue to have jurisdiction over him/her under the Code of
                                Conduct thereafter in respect of matters relating to the League taking place prior to that
                                point.</p>
                        </div>
                    </div>
                    <div className={classes.image_section}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/3D_illustration_image_of_a_gavel_-_auction_hammer_-_free_to_use_in_your_projects_01.jpg"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About;