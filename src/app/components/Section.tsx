import styles from '@/app/components/Content.module.css'

interface Section {
    children: any,
    title: String,
    subText: String
}

const Section: React.FC<Section> = ({
    children,
    title = 'Default Title',
    subText = 'Subtext'
}) => {
    return (
        <div className={styles.Section}>
            <div className={styles.chartSection}>
                {children}
            </div>
            <p className={styles.chartTitle}>{title}</p>
            <p className={styles.chartSubtext}>{subText}</p>

            <div className={styles.lastUpdate}>
                <p>Just updated</p>
            </div>
        </div>
    )
}

export default Section