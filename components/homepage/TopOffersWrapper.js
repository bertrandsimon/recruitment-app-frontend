import styles from '../../styles/TopOffersWrapper.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const style = {
  width: '100%',
  maxWidth: 300,
  bgcolor: 'background.paper',
};


import Tags from './Tags';
import TopOffers from './TopOffers';

function TopOffersWrapper() {


  return (

    <div>
        <div className={styles.title}>
            <span className={styles.subtitle1}>Les offres</span> <span className={styles.subtitle2}> du moment</span><Image src="/images/arrow2.jpg" width={19} height={27} className={styles.arrow}/>
        </div>

        <div className={styles.container}>
            <div>

            </div>

        </div>


    </div>

  );
}

export default TopOffersWrapper;