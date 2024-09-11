import Link from 'next/link';
import styles from './Layout.module.css';
import Logs from './Logs';

interface Layout {
  children: any
}

const Layout: React.FC<Layout> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li className={styles.link}>
              <Link href="/">
                <p className={styles.link}>Dashboard</p>
              </Link>
            </li>
            <li className={styles.link}>
                <p>Profile</p>
            </li>
            <li className={styles.link}>
                <p>Settings</p>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.header2}>Dashboard</h1>
        {children}
        <Logs/>
      </main>
    </div>
  );
};

export default Layout;
