import styles from '../../styles/StepperOne.module.css';
import Image from 'next/image';

function StepperOne(props) {


  return (

    <div className={styles.container}>
      <div className={styles.roundFilled}>1</div>
      <div className={styles.textRed}>Mes infos</div>
      <div className={styles.line}></div>
      <div className={styles.roundGrey}>2</div>
      <div className={styles.textGrey}>Mon profil complet</div>

    </div>

  );
}

export default StepperOne;