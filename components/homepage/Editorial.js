import styles from '../../styles/Editorial.module.css';
import Image from 'next/image';

function Editorial(props) {


  return (

    <div className={styles.container}>

      <div className={styles.leftPanel}>

        
        <div className={styles.title}>
          <h3>Bienvenue chez Gedimat</h3>
        </div>

        <div className={styles.authorWrapper}>

          <div className={styles.avatar}>
          <Image src="/images/avatar.png" width={80} height={80} className={styles.arrow}/>
          </div>

          <div>
            <span>{props.editoTxt}</span>
          
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