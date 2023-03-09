import styles from '../../styles/StepperTwo.module.css';
import Image from 'next/image';

function StepperTwo(props) {


  return (

    <div className={styles.container}>
      <div className={styles.roundFilled}>1</div>
      <div className={styles.textRed}>Mes infos</div>
      <div className={styles.line}></div>
      <div className={styles.roundFilled}>2</div>
      <div className={styles.textRed}>Mon profil complet</div>

    </div>

  );
}

export default StepperTwo;