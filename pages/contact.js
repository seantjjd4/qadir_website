import styles from '@/styles/Contact.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import GoogleMapEmbed from '@/components/googleMapEmbed'

export default function About() {
    return (
        <>
            <div className={styles.page}>
                <Navbar/>
                <main className={styles.main}>
                    <div className={styles.title}>Contact Us</div>
                    <div className={styles.container}>
                        <div className={styles.companyInfo}>
                            <h2>Qadir Corporation</h2>
                            <p><b>Address:</b>&nbsp;&nbsp;<a className={styles.link} href="https://goo.gl/maps/rFMEtsTF3cT9Juvh8" target="_blank" rel="noreferrer noopenner">7F., No. 7, Wuquan 1st Rd.,<br/> Xinzhuang Dist., New Taipei City,<br/> 248022, Taiwan.</a></p>
                            <p><b>Tel:</b>&nbsp;&nbsp;+886 (02) 2298-4178</p>
                            <p><b>Fax:</b>&nbsp;&nbsp;(02) 2298-4178 #608</p>
                            <p><b>Email:</b>&nbsp;&nbsp;<a className={styles.link} href="mailto:service@qadircorp.com">service@qadircorp.com (email us!)</a></p>
                        </div>
                        <div className={styles.googleMap}>
                            <GoogleMapEmbed/>   
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}