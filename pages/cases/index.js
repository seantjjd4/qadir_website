import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/cases/Cases.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

import { getAllCases } from '@/data/caseData'

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
                                    src="/case1.jpeg"
                                    alt="Robotics Icon"
                                    width={160}
                                    height={90}
                                    priority
                                />
                                <h2>
                                    Automotive brake caliper inspection system
                                </h2>
                                <p>
                                    aliquet nibh praesent tristique magna sit amet purus gravida quis...
                                </p>
                            </Link>
                        );
                    })}
                    <Link
                        href="/cases/[id]"
                        as="/cases/1"
                        className={styles.card}
                    >
                        <Image
                            className={styles.card_pic}
                            src="/case1.jpeg"
                            alt="Robotics Icon"
                            width={160}
                            height={90}
                            priority
                        />
                        <h2>
                            Automotive brake caliper inspection system
                        </h2>
                        <p>
                            aliquet nibh praesent tristique magna sit amet purus gravida quis...
                        </p>
                    </Link>
                    <Link
                        href="/cases/[id]"
                        as="/cases/2"
                        className={styles.card}
                    >
                        <Image
                            className={styles.card_pic}
                            src="/case1.jpeg"
                            alt="Robotics Icon"
                            width={160}
                            height={90}
                            priority
                        />
                        <h2>
                            Automotive brake caliper inspection system
                        </h2>
                        <p>
                            aliquet nibh praesent tristique magna sit amet purus gravida quis...
                        </p>
                    </Link>
                    <Link
                        href="/cases/[id]"
                        as="/cases/3"
                        className={styles.card}
                    >
                        <Image
                            className={styles.card_pic}
                            src="/case1.jpeg"
                            alt="Robotics Icon"
                            width={160}
                            height={90}
                            priority
                        />
                        <h2>
                            Automotive brake caliper inspection system
                        </h2>
                        <p>
                            aliquet nibh praesent tristique magna sit amet purus gravida quis...
                        </p>
                    </Link>
                    <Link
                        href="/cases/[id]"
                        as="/cases/4"
                        className={styles.card}
                    >
                        <Image
                            className={styles.card_pic}
                            src="/case1.jpeg"
                            alt="Robotics Icon"
                            width={160}
                            height={90}
                            priority
                        />
                        <h2>
                            Automotive brake caliper inspection system
                        </h2>
                        <p>
                            aliquet nibh praesent tristique magna sit amet purus gravida quis...
                        </p>
                    </Link>
                    <Link
                        href="/cases/[id]"
                        as="/cases/5"
                        className={styles.card}
                    >
                        <Image
                            className={styles.card_pic}
                            src="/case1.jpeg"
                            alt="Robotics Icon"
                            width={160}
                            height={90}
                            priority
                        />
                        <h2>
                            Automotive brake caliper inspection system
                        </h2>
                        <p>
                            aliquet nibh praesent tristique magna sit amet purus gravida quis...
                        </p>
                    </Link>
                </div>
            </main>
            <Footer/>
        </>
    )
}