import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function nav() {
  return (
      
    <div className={styles.menu}>
        <Image src="/logo.png" alt="Prominas Logo" width={200} height={59} />
    </div>
    
  )
}