import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css"

const navigationRoutes = ["Home", "About", "Service", "Cooperate","Contact"];

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <Link href={`/${singleRoute}`}>{singleRoute}</Link>
                );
            })}
        </nav>
    );
}