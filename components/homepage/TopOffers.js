import styles from '../../styles/TopOffers.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function TopOffers() {


  return (

    <div className={styles.container}>

       
        <div className={styles.title2}>
            <span className={styles.subtitle1}>Les offres</span> <span className={styles.subtitle2}> du moment</span><Image src="/images/arrow2.jpg" width={19} height={27} className={styles.arrow}/>
        </div>
    </div>

  );
}

export default TopOffers;