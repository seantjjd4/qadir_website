import styles from '@/styles/components/Homelink.module.css'

export default function Homelink({ linkname }) {

  const isBrowser = () => typeof window !== 'undefined'; 

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.box}>
      <button onClick={scrollToTop} className={styles.home_link}>
        {linkname}
      </button>
    </div>
  );
}