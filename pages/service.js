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
                        <h2 className={styles.service_title}>Artificial Intelligence Integration</h2>
                        <p className={styles.service_description}>
                        With AI integration, we don't just follow trends; we set them. Our AI-driven solutions push the boundaries of what's achievable in terms of predictive maintenance and resource optimization.
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
                        <h2 className={styles.service_title}>Robotic Automation Design</h2>
                        <p className={styles.service_description}>
                        We are your only source for cutting-edge, custom robotic automation design. We specialize in crafting solutions that not only meet your needs but go a step further to achieve what no one else can.
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
                        <h2 className={styles.service_title}>Collaborative Robots</h2>
                        <p className={styles.service_description}>
                        Our robotic automation systems are not just efficient; they're designed to seamlessly integrate with your workforce, achieving a level of harmony and productivity that sets us apart from the rest.
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
                        <h2 className={styles.service_title}>Quality Control and Inspection</h2>
                        <p className={styles.service_description}>
                        Our commitment to quality control and inspection is unparalleled. We utilize robotics to achieve levels of precision and error reduction that others can only dream of.
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
                        <h2 className={styles.service_title}>Local Presence</h2>
                        <p className={styles.service_description}>
                        With our headquarter office in Taipei, Taiwan and branch office in Lublin, Poland, we offer local expertise and support that goes above and beyond. Our faster response times and personalized service demonstrate our commitment to excellence.
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
                        <h2 className={styles.service_title}>Continuous Support</h2>
                        <p className={styles.service_description}>
                        We're not satisfied with just offering solutions. Our continuous support and maintenance services exceed expectations, ensuring the optimal operation of our robotic systems.
                        </p>
                    </div>
                </div>
                <div className={styles.horizonline}></div>
                    <div className={styles.industry_area}>
                        <h2 className={styles.subtitle}>Industries Involved</h2>
                        <div className={styles.area_box}>
                            <div className={styles.industry_pic_area}>
                                <Image className={styles.industry_pic}
                                    src="/case1.jpeg"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            
                            <div className={styles.industry_content}>
                                <h3 className={styles.area_title}>Food Industry</h3>
                                <p className={styles.area_description}>To help our customer massive production smoothly, we deploy automation solutions for various types of bakery production, from food packaging, and basket washing machines collaborating, putting sesame seeds on bun, and Injecting custard cream into the bread, replacing sandpaper automatically, overcoming the difficulty of grasping smooth surfaces of food package.</p>
                            </div>
                        </div>
                        <div className={styles.area_box}>
                            <div className={styles.industry_content}>
                                <h3 className={`${styles.area_title} ${styles.align_right}`}>Automobile</h3>
                                <p className={styles.area_description}>To enhance the inconsistency in manual recognition, we assist car parts manufacturers in implementing AOI (Automated Optical Inspection) in the automotive brake caliper inspection system,  measuring surface inspection and inner diameter measurement. We have a strong proficiency in surface treatment so we can provide various kinds of pre-treatment process solutions to the car parts manufacturers.  To maximize space efficiency, we assisted a leading car manufacturer in developing an innovative system, automotive wheel rim inspection, that can pick up and release any size of car wheels in the product line.</p>
                            </div>
                            <div className={styles.industry_pic_area}>
                                <Image className={styles.industry_pic}
                                    src="/case1.jpeg"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                        </div>
                        <div className={styles.area_box}>
                            <div className={styles.industry_pic_area}>
                                <Image className={styles.industry_pic}
                                    src="/case1.jpeg"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className={styles.industry_content}>
                                <h3 className={styles.area_title}>Medical & Chemical factory</h3>
                                <p className={styles.area_description}>Assisting the chemical plant in material handling and devices transferring. We help pharmacy companies in mitigating human error, reducing the potential for contamination, and minimizing exposure to potent pharmaceutical ingredients.</p>
                            </div>
                        </div>
                        <div className={styles.area_box}>
                            <div className={styles.industry_content}>
                                <h3 className={`${styles.area_title} ${styles.align_right}`}>Electronic</h3>
                                <p className={styles.area_description}>Assisting the electronics assembly plant in deploying robot arms in the assembly line. We also incorporate automated inspection for curved screen monitors to mitigate errors stemming from manual fatigue and reduce the potential harm to human eyes caused by the intense light required during inspection.</p>
                            </div>
                            <div className={styles.industry_pic_area}>
                                <Image className={styles.industry_pic}
                                    src="/case1.jpeg"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                        </div>
                        <div className={styles.area_box}>
                            <div className={styles.industry_pic_area}>
                                <Image className={styles.industry_pic}
                                    src="/case1.jpeg"
                                    alt="profile picture"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className={styles.industry_content}>
                                <h3 className={styles.area_title}>Traditional Industry</h3>
                                <p className={styles.area_description}>Assisting traditional industries upgrade to Industry 4.0. The grinding system applied to wood panel processing aims to fill the gap of experienced master carpenter shortage. Layout the working station to make bathroom equipment supplier lift and place the heavy and smooth surface toilet tank appropriately , enhancing the automation of material handling process in footwear machinery</p>
                            </div>
                        </div>
                    </div>
            </main>
            <Footer/>
        </>
    )
}