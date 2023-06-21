import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/cases/Cases.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

import { getAllCases } from '@/data/caseData'

const inter = Inter({ subsets: ['latin'] })

export default function Cases() {

    const cases = getAllCases();

    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <Toplink links={[{name: "Cases", path: "/cases"}]} />
                <h1 className={styles.page_title}>Interesting Cases</h1>
                <div className={styles.grid}>
                    {cases.map((singleCase) => {
                        return (
                            <Link
                                href="/cases/[id]"
                                as={`/cases/${singleCase.id}`}
                                key={singleCase.id}
                                className={styles.card}
                            >
                                <Image
                                    className={styles.card_pic}
                                    src={singleCase.src}
                                    alt="Robotics Icon"
                                    width={160}
                                    height={90}
                                    priority
                                />
                                <h2 className={styles.title}>
                                    {singleCase.title}
                                </h2>
                                <p className={styles.description}>
                                    {singleCase.description.slice(0, 80)}<span>...</span>
                                </p>
                                <p className={`${styles.arrow} ${inter.className}`}>-&gt;</p>
                            </Link>
                        );
                    })}
                </div>
            </main>
            <Footer/>
        </>
    )
}