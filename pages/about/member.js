import Image from 'next/image'
import styles from '@/styles/about/Member.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

import { getAllMembers } from '@/data/memberData'

export default function About() {
    const links = [{"name": "About Qadir", "path": "/about"}, {"name": "Member", "path": "/about/member"}]

    const members = getAllMembers();

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Toplink links={links}/>
                <h1 className={styles.page_title}>Company & Members</h1>
                {members.map((member) => {
                    return (
                        <div className={styles.container} key={member.id}>
                            <Image className={styles.pfp}
                                src={member.src}
                                alt="profile picture"
                                width={150}
                                height={150}
                                priority
                            />
                            <div className={styles.box}>
                                <h2 className={styles.box_name}>{member.name}</h2>
                                <p className={styles.box_title}>{member.title}</p>
                                <p className={styles.box_description}>{member.description}</p>
                            </div>
                        </div>
                    )
                })}
            </main>
            <Footer />
        </>
    )
}