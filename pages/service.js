import Image from 'next/image'
import styles from '@/styles/Service.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Service() {
    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <h1 className={styles.page_title}>Why Qadir ?</h1>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <Image className={styles.service_pic}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <h2 className={styles.service_title}>服務項目1</h2>
                        <p className={styles.service_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque purus semper eget duis at tellus at urna condimentum. 
                            Pulvinar pellentesque habitant morbi tristique senectus et netus e.
                        </p>
                    </div>
                </div>
                <div className={styles.horizonline}></div>
                <div className={styles.area}>
                    <div className={styles.img_area}>
                        <Image className={`${styles.area_pic} ${styles.pic1}`}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <Image className={`${styles.area_pic} ${styles.pic2}`}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <Image className={`${styles.area_pic} ${styles.pic3}`}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                        <Image className={`${styles.area_pic} ${styles.pic4}`}
                            src="/case1.jpeg"
                            alt="profile picture"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>
                    <div className={styles.content_area}>
                        <h2 className={styles.subtitle}>Industries Involved</h2>
                        <div className={styles.area_box}>
                            <h3 className={styles.area_title}>Food Industry</h3>
                            <p className={styles.area_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla</p>
                        </div>
                        <div className={styles.area_box}>
                            <h3 className={styles.area_title}>Automobile</h3>
                            <p className={styles.area_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla</p>
                        </div>
                        <div className={styles.area_box}>
                            <h3 className={styles.area_title}>Medical & Chemical factory</h3>
                            <p className={styles.area_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla</p>
                        </div>
                        <div className={styles.area_box}>
                            <h3 className={styles.area_title}>Traditional Industry</h3>
                            <p className={styles.area_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}