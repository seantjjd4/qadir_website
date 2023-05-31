import styles from "@/styles/components/Footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.companyInfo}>
                        <h2 className={styles.companyName}>Company Name</h2>
                        <p className={styles.address}>Address, City, Postal Code</p>
                        </div>
                        <div className={styles.contactInfo}>
                        <p className={styles.phone}>Phone: +1 (123) 456-7890</p>
                        <p className={styles.email}>Email: info@roboticscompany.com</p>
                        <p className={styles.website}>Website: www.roboticscompany.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}