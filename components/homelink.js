import Link from 'next/link'
import styles from '@/styles/components/Homelink.module.css'

export default function Homelink() {
    return (
      <div className={styles.box}>
        <Link href={"/"}>
          <p className={styles.home_link}>QADIR CORP</p>
        </Link>
      </div>
    );
}