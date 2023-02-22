import styles from '../../styles/Card.module.css';

function Card() {


  return (

    <div className={styles.cardWrapper}>

        <h5>h5 Headline</h5>

        <div className={styles.tagWrapper}>
          <div className={styles.tag1}><span>cdi</span></div>
          <div className={styles.tag2}><span>78</span></div>
        </div>

        <div className={styles.txt}>
          <span>Ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.line}>  </div>
          <div className={styles.day}><span>posté : 1 jour</span></div>
        </div>

      
    </div>

  );
}

export default Card;