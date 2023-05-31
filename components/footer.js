import styles from "@/styles/components/Footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.companyInfo}>
                        <h2 className={styles.companyName}>Qadir Corporation</h2>
                        <p className={styles.address}>7F., No. 7, Wuquan 1st Rd., Xinzhuang Dist.,<br/> New Taipei City 248022, Taiwan (R.O.C.)</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <p className={styles.phone}>Phone: +1 (123) 456-7890</p>
                        <p className={styles.email}>Email: info@roboticscompany.com</p>
                        <p className={styles.website}>Website: www.roboticscompany.com</p>
                    </div>
                </div>
                <div>
                    <p className={styles.copyright}>© 2023 QadirCorp, LTD. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}