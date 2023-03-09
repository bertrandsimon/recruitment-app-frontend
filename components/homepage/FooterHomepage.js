import styles from '../../styles/FooterHomepage.module.css';
import Image from 'next/image';
import CareersCards from './CareersCards';

function FooterHomepage() {


  return (

    <div className={styles.container}>
      
      <div className={styles.leftPanel}>
        <span className={styles.leftTxt}>Droits réservés 2023</span>
       
      </div>

      <div className={styles.rightPanel}>
        <Image src="/images/1.png" width={101} height={51}/>
        <Image src="/images/2.png" width={97} height={34}/>
        <Image src="/images/3.png" width={97} height={42}/>
      </div>

    </div>

  );
}

export default FooterHomepage;