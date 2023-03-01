
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
import EditorialWrapper from './homepage/EditorialWrapper';
import JobCard from './homepage/JobCard';
import JobCardsWrapper from './homepage/JobCardsWrapper';


// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// MUI IMPORTS
import TextField from '@mui/material/TextField';


function Home() {
 
  return (
    <div>
     
        <Menu />
      

        <div style={{ zIndex: 2 }} className={styles.sliderContainer}>
        <Slider/>
        </div>


        <div className={styles.title2}>
            <span className={styles.subtitle1}>Les offres</span> <span className={styles.subtitle2}> du moment</span><Image src="/images/arrow2.jpg" width={19} height={27} className={styles.arrow}/>
        </div>
        
        <div style={{ zIndex: 1 }} className={styles.topOffersWrapper}>
          <TopOffersWrapper/>
        </div>

        <div style={{ zIndex: 3 }} className={styles.editorialWrapper}>
          <EditorialWrapper/>
        </div>
    
        
        
        <Banner/>

        <div style={{ zIndex: 4 }} className={styles.jobCardsWrapper}>
          <JobCardsWrapper/>
        </div>
        
        
       

        <br /><br /><br /><br />
        
  
        
    </div>
  );
}

export default Home;
