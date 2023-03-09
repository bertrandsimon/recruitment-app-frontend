import styles from '../../styles/CareersCards.module.css';
import Image from 'next/image';

function CareersCards() {


  return (

    <div className={styles.container}>

      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper1}></div>
        <div className={styles.textWrapper}>
          <span>Conseiller de vente</span>
        </div>
      </div>
    

      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper2}></div>
        <div className={styles.textWrapper}>
          <span>Conseiller libre Service</span>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper3}></div>
        <div className={styles.textWrapper}>
          <span>Vendeur salle expo</span>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper4}></div>
        <div className={styles.textWrapper}>
          <span>Attaché technique</span>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper5}></div>
        <div className={styles.textWrapper}>
          <span>Magasinier vendeur</span>
        </div>
      </div>
      
    </div>

  );
}

export default CareersCards;