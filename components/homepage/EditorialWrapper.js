import styles from '../../styles/EditorialWrapper.module.css';
import Editorial from './Editorial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EditorialWrapper() {


  return (

    <div className={styles.container}>

        <div className={styles.presentationWrapper}>
          <h2>
            <span className={styles.subtitle1}>Pourquoi</span>
            <span className={styles.subtitle2}> nous rejoindre ?</span>
          </h2>
          <span>
          ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esseion ullamco laboris nisi ut aliquip ex ea commodo sequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          </span>
        </div>
       

        <div className={styles.editorialWrapper}>
          <div className={styles.slideNav}>
            <div className={styles.arrow}><FontAwesomeIcon icon={faArrowLeft}  /></div>
            <div className={styles.arrow}><FontAwesomeIcon icon={faArrowRight} /></div>
           </div>
          <Editorial />
        </div>
       
      
    </div>

  );
}

export default EditorialWrapper;