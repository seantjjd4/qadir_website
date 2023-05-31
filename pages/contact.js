import styles from '@/styles/About.module.css'

import Navbar from '@/components/navbar.js'

export default function About() {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                <div>Contact Us</div>
            </main>
        </>
    )
}