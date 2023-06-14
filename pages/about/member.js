import styles from '@/styles/Member.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

export default function About() {
    const links = [{"name": "About Qadir", "path": "/about"}, {"name": "Member", "path": "/about/member"}]

    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <Toplink links={links}/>
                <div>nothing yet...</div>
            </main>
            <Footer/>
        </>
    )
}