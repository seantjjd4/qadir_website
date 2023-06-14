import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Toplink from '@/components/toplink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Qadir Corp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={`${styles.main} ${inter.className}`}>
        <Toplink links={[{name: "Qadir Corp", path: "/"}]}/>

        <div className={`${styles.center} ${styles.glow}`}>
          <Image
            className={styles.left_icon}
            src="/robotics_icon1.png"
            alt="Robotics Icon"
            width={80}
            height={80}
            priority
          />
          <div className={styles.titleBlock}>
            <p className={styles.title}>Qadir Corporation</p>
            <p className={styles.subtitle}>Design For The Future</p>
          </div>
          <Image
            className={styles.right_icon}
            src="/robotics_icon.png"
            alt="Robotics Icon"
            width={80}
            height={80}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link
            href="/about"
            className={styles.card}
          >
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              More about Qadir Corporation and members!
            </p>
          </Link>

          <Link
            href="/service"
            className={styles.card}
          >
            <h2>
              Service <span>-&gt;</span>
            </h2>
            <p>
              More about Qadir Corporation and members!
            </p>
          </Link>

          <Link
            href="/cases"
            className={styles.card}
          >
            <h2>
              Past Cases <span>-&gt;</span>
            </h2>
            <p>
              More about Qadir Corporation and members!
            </p>
          </Link>
        </div>
        <div className={styles.introduction}>
          Qadir, with World Leading Idea, <br/>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Tellus elementum sagittis vitae et leo duis. Nec dui nunc mattis enim ut.
        </div>
        <div className={styles.center}>
          <video className={styles.video} src="/covervideo.mp4" autoPlay loop muted>
            <p>你的瀏覽器不支援 HTML 5 video</p>
          </video>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/cases" className={styles.casesLink}>Learn More...</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
