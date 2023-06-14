import {useRouter} from 'next/router';

import styles from '@/styles/components/Toplink.module.css'

export default function Homelink({ links }) {

  const isBrowser = () => typeof window !== 'undefined'; 
  const router = useRouter();

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function clickLink(link) {
    console.log(link);
    console.log(link.path);
    console.log(link.name);
    if (!isBrowser()) return;
    if (router.pathname == link.path) scrollToTop();
    else router.push(link.path);
  }

  return (
    <div className={styles.box}>
      {links.map((link) => {
        return (
          <button onClick={() => {clickLink(link)}} className={styles.top_link}>
            {link.name}
          </button>
        )
      })}
      {/* <button onClick={scrollToTop} className={styles.top_link}>
        {router.pathname}
      </button> */}
    </div>
  );
}