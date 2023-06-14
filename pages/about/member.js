import styles from '@/styles/about/Member.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'
import MemberIntro from '@/components/memberIntro'

export default function About() {
    const links = [{"name": "About Qadir", "path": "/about"}, {"name": "Member", "path": "/about/member"}]

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Toplink links={links}/>
                <h1 className={styles.page_title}>Company & Members</h1>
                <div className={styles.member_area}>
                </div>
                <MemberIntro />
                <MemberIntro />
                <MemberIntro />
                <MemberIntro />
            </main>
            <Footer />
        </>
    )
}