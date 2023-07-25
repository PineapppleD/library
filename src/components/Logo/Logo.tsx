import styles from './Logo.module.css';

interface LogoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

function Logo(props: LogoProps) {
    return ( 
        <div className={styles.logo}>
            <div className={styles.logo_lines}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
            <div className={styles.logo_text}>
                <span>А</span>бзац
            </div>
        </div>
     );
}

export default Logo;