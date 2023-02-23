import styles from '../../styles/Banner.module.css';

function Banner() {


  return (

    <div className={styles.container}>

        <div className={styles.argumentsWrapper}>

          <div className={styles.argument}>
            <span>55 années d’expérience</span>
          </div>

          <div className={styles.argument}>
            <span>1er groupement d’indépendants</span>
          </div>

          <div className={styles.argument}>
            <span>200 sociétés indépendantes</span>
          </div>

        </div>
      
    </div>

  );
}

export default Banner;