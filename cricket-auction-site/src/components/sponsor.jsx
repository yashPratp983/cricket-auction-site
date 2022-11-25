import Styles from './sponsor.module.css'
const Sponsor = () => {
    return (
        <div className={Styles.sponsor}>
            <div className={Styles.images}>
                <div className={Styles.tata}>
                    <a href="https://www.tata.com/"><img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1644520414_tata-logo.png"></img></a>
                </div>
                <div className={Styles.bunch}>
                    <div>
                        <a href='https://www.hotstar.com/in'><img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1636628182_star-sports.png"></img></a>
                    </div>
                    <div>
                        <a href='https://www.hotstar.com/in'><img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633587919_sponsor-hotstar.webp"></img></a>
                    </div>
                    <div className={Styles.aramco}>
                        <a href='https://www.aramco.com/'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/logo/1647964934_aramco.png'></img></a>
                    </div>
                    <div className={Styles.paytm}>
                        <a href='https://paytm.com/'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633588474_sponsor-paytm.webp'></img></a>
                    </div>
                    <div className={Styles.ceat}>
                        <a href='https://www.ceat.com/'><img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633588547_sponsor-ceat.webp'></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor;