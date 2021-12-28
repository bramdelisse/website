import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by a <img src="/favicon.png" alt="Swallow Logo" className={styles.logo} />
      </footer>
    </>
  )
}
