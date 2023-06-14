import { useRouter } from 'next/router';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

export default function Case () {
    const router = useRouter();
    const { id } = router.query;

    // 根据 ID 获取相应的数据或内容

    return (
        <>
            <Navbar />
            <main>
                <h1>Dynamic Page</h1>
                <p>Dynamic ID: {id}</p>
            </main>
        </>
    );
};