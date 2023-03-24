import styles from '../../styles/EditorialWrapper.module.css';
import Editorial from './Editorial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EditorialWrapper(props) {


  return (

    <div className={styles.container}>

        <div className={styles.presentationWrapper}>
          <h2>
            <span className={styles.subtitle1}>Pourquoi</span>
            <span className={styles.subtitle2}> nous rejoindre ?</span>
          </h2>
          <span>
          Si comme nous, vous avez à cœur d'accompagner nos clients dans des projets qui comptent pour eux, rejoignez-nous ! Découvrez nos dernières offres au sein de notre groupement.
          </span>
        </div>
       

        <div className={styles.editorialWrapper}>
          <div className={styles.slideNav}>
            <div className={styles.arrow}><FontAwesomeIcon icon={faArrowLeft}  /></div>
            <div className={styles.arrow}><FontAwesomeIcon icon={faArrowRight} /></div>
           </div>
          <Editorial editoTitle={props.editoTitle} editoTxt={props.editoTxt}/>
        </div>
       
      
    </div>

  );
}

export default EditorialWrapper;