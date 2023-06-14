import Image from 'next/image';

import styles from '@/styles/components/MemberIntro.module.css'

export default function MemberIntro() {
    return (
        <>
            <div className={styles.container}>
                <Image className={styles.pfp}
                    src="/robot_pfp.jpeg"
                    alt="profile picture"
                    width={150}
                    height={150}
                    priority
                />
                <div className={styles.box}>
                    <h2 className={styles.box_title}>Name 1</h2>
                    <p className={styles.box_description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed libero enim sed faucibus turpis in eu. Vestibulum lectus mauris
                        ultrices eros in cursus. At volutpat diam ut venenatis tellus in.
                        Tempor id eu nisl nunc mi ipsum faucibus vitae. Ac felis donec et odio pellentesque diam volutpat.
                        Imperdiet proin fermentum leo vel orci porta non. Placerat duis ultricies lacus sed turpis.
                        Nec feugiat nisl pretium fusce id velit ut tortor.
                        Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
                    </p>
                </div>
            </div>
        </>
    );
}