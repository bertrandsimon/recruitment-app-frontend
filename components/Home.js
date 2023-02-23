
import styles from '../styles/Home.module.css';
import Menu from './Menu';

import Slider  from './homepage/Slider';
import Tags  from './homepage/Tags';
import TopOffersWrapper from './homepage/TopOffersWrapper';
import TopOffers  from './homepage/TopOffers';
import Editorial  from './homepage/Editorial';
import Banner  from './homepage/Banner';
import CardsWrapper  from './homepage/CardsWrapper';
import Card  from './homepage/Card';

// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// MUI IMPORTS



function Home() {
  return (
    <div>
     
        <Menu />
        <Slider/>
        <div className={styles.title2}>
            <span className={styles.subtitle1}>Les offres</span> <span className={styles.subtitle2}> du moment</span><Image src="/images/arrow2.jpg" width={19} height={27} className={styles.arrow}/>
        </div>
        <TopOffersWrapper/>
    
      
        <Editorial/>
        <Banner/>
        <CardsWrapper/>
        
        
    </div>
  );
}

export default Home;
