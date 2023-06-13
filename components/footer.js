import styles from "@/styles/components/Footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.companyInfo}>
                        <h2 className={styles.companyName}>Qadir Corporation</h2>
                        <p className={styles.address}><a className={styles.link} href="https://goo.gl/maps/rFMEtsTF3cT9Juvh8" target="_blank" rel="noreferrer noopenner">7F., No. 7, Wuquan 1st Rd., Xinzhuang Dist.,<br/> New Taipei City 248022, Taiwan.</a></p>
                    </div>
                    <div className={styles.contactInfo}>
                        <p className={styles.phone}>Tel: +886 (02) 2298-4178</p>
                        <p className={styles.email}>Email: <a className={styles.link} href="mailto:service@qadircorp.com">service@qadircorp.com</a></p>
                        <p className={styles.fax}>Fax: (02) 2298-4178 #608</p>
                    </div>
                </div>
                <div>
                    <p className={styles.copyright}>© 2023 QadirCorp, LTD. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}