import styles from '../styles/Footer.module.css';
import BusinessCard from './homepage/BusinessCard';
import Image from 'next/image';

function Footer() {


    return (
      
  
 
      <div className={styles.container}>
       <div className={styles.Footer}>
        <BusinessCard />  
        
        </div>
        <hr color='black'></hr>
        <div className={styles.tout}>
          <div className={styles.droits}>
          <Image src ="/images/droits-réservés-logo-footer.png" className={styles.droits} height="10px" width="99px"/>
</div>
        <div className={styles.logo}>  
        <div>
        <Image src="/images/gedibois-logo-footer.png" className={styles.logo} width="50px" height="30px"  />
       </div> 
       {/* <div> */}
        <Image src="/images/gedimat-concept-logo-footer.png" className={styles.logo} width="50px" height="45px"  />
        {/* </div>
        <div> */}
        <Image src="/images/gedimat-logo-footer.png" className={styles.logo} width="50px" height="45px"  />
        {/* </div> */}
      </div>
        </div>
        
        
  </div>
  

  
        
  
    );
  }
  
  export default Footer;