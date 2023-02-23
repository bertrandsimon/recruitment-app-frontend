import styles from '../../styles/EditorialWrapper.module.css';
import Editorial from './Editorial';

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
          <Editorial />
        </div>
       
      
    </div>

  );
}

export default EditorialWrapper;