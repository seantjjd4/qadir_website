import Image from 'next/image'
import styles from '@/styles/About.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Homelink from '@/components/homelink'

export default function About() {
    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <Homelink linkname={"About Qadir"}/>
                <h1 className={styles.big_title}>About Us</h1>
                <div className={styles.box}>
                    <div className={styles.box_image}>
                        <Image
                            src="/robot.png"
                            alt="Robot Icon"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <div className={styles.box_text}>
                        <div className={styles.title}>
                            About QADIR
                        </div>
                        <div className={styles.description}>
                            Qadir Corporation is at the forefront of advancing robotic automation through cutting-edge innovation.
                            Our mission is to develop versatile and intelligent robotic systems that seamlessly integrate into various industries.
                            By leveraging AI, machine learning, and robotics, we streamline processes, enhance productivity, and drive efficiency for our clients.
                            Our goal is to make robotic automation an integral part of industries, transforming the way businesses operate.
                        </div>
                    </div>
                </div>
                <div className={styles.robot_line}>
                    <Image
                        src="/robot_line.png"
                        alt="Robot Working Line"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.article}>
                    <div className={styles.title}>
                        What We Do
                    </div>
                    <div className={styles.description}>
                        We enable digital transformation by providing state-of-the-art robotic automation solutions that integrate with existing digital ecosystems.
                        By automating repetitive tasks, our robots free up human workers to focus on higher-value activities,
                        driving productivity and unlocking new levels of efficiency.
                        Our solutions empower businesses to embrace digital transformation, streamline processes, and achieve their optimization goals.
                    </div>
                </div>
                <div className={styles.robot_line}>
                    <Image
                        src="/robot_line1.png"
                        alt="Robot Working Line"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.vision}>
                    <div className={styles.title}>
                        Ours Vision
                    </div>
                    <div className={styles.description}>
                        At Qadir Corporation, we are dedicated to pioneering transformative innovation in robotic automation.
                        By enabling businesses to achieve digital transformation and harness the full potential of automation,
                        we aim to revolutionize industries and drive them towards unparalleled success.
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}