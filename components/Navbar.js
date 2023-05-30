import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css"

const navigationRoutes = [{"name": "Home", "path": "/"}, {"name": "About", "path": "/about"}, {"name": "Service", "path": "/service"}, {"name": "Designed Cases", "path": "/cases"}, {"name": "Contact", "path": "/contact"}];

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <Link href={`${singleRoute['path']}`}>{singleRoute['name']}</Link>
                );
            })}
        </nav>
    );
}