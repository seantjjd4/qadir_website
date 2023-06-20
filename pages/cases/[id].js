import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/styles/cases/[id].module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

import { getCaseById } from '@/data/caseData'

export default function Case () {
    const router = useRouter();
    const { id } = router.query;

    if (isNaN(id)) return;

    const singleCase = getCaseById(id);

    if (!(singleCase)) console.log("single case false");
    // 根据 ID 获取相应的数据或内容
    
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Toplink links={[{name: "Cases", path: "/cases"}]} />
                <h1 className={styles.page_title}>Project Case : </h1>
                <h1 className={styles.title}>{singleCase.title}</h1>
                <p className={styles.description}>{singleCase.description}</p>
                <Image
                    className={styles.image}
                    src={singleCase.src}
                    alt="Robotics Icon"
                    width={160}
                    height={90}
                    priority
                />
            </main>
            <Footer />
        </>
    );
};