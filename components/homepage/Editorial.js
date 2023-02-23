import styles from '../../styles/Editorial.module.css';
import Image from 'next/image';

function Editorial() {


  return (

    <div className={styles.container}>

      <div className={styles.leftPanel}>

        <span className={styles.subtitle}>subtitle</span>
        <div className={styles.title}>
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        </div>

        <div className={styles.authorWrapper}>

          <div className={styles.avatar}>
          <Image src="/images/avatar.png" width={40} height={40} className={styles.arrow}/>
          </div>

          <div>
            <h5>H5 headline</h5>
            <span className={styles.subtitle}>subtitle</span>
          </div>

        </div>

        <div className={styles.ctaWhite}><span>CTA</span></div>

      </div>

      <div></div>

      <div className={styles.rightImage}>
        <Image src="/images/editorial.png" width={330} height={283} className={styles.arrow}/>
      </div>
        
      
    </div>

  );
}

export default Editorial;