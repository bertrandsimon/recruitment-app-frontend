import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Menu() {


  return (

    <div className={styles.container}>

        <div className={styles.logo}><Image src="/images/gedimat-logo.png" alt="avatar" width={190} height={75} /></div>
        
        <div className={styles.menuContainer}>
          <div><h4>Opportunités</h4></div>
          <div> | </div>
          <div><h4>Carrières</h4></div>
          <div> | </div>
          <div><h4>Contact</h4></div>
          <div>  </div>
          <div className={styles.ctaWhite}><span>Bouton</span></div>
        </div>
      
    </div>

  );
}

export default Menu;