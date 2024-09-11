import styles from "./page.module.css";
import Layout from "@/app/components/Layout";
import Content from "@/app/components/Content";
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.darkmodeContainer}>
          <Image 
            height={260}
            width={260}
            src={'icon.svg'} alt={''}
            className={styles.logoImg}
          />
          <h1 className={styles.logo}>Blockhouse.app</h1>
        </div>

        <div className={styles.lightmodeContainer}>
          <Image 
            height={260}
            width={260}
            src={'icon2.svg'} alt={''}
            className={styles.logoImg}
          />
          <h1 className={styles.logo}>blockhouse.app</h1>
        </div>
        <Layout children={<Content/>}>
        </Layout>
        <p className={styles.footerTitle}>
          <a href='http://github.com/Hoccyy' target='blank'>
          @Hoccyy
          </a>
        </p>
      </main>
    </div>
  );
}
