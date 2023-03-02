
import styles from '../styles/Home.module.css';
import Menu from './Menu';

import Slider  from './homepage/Slider';
import TopOffersWrapper from './homepage/TopOffersWrapper';
import Editorial  from './homepage/Editorial';
import Banner  from './homepage/Banner';
import EditorialWrapper from './homepage/EditorialWrapper';
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


import BusinessCard from './homepage/BusinessCard';


function Home() {

  const [editoTitle, setEditoTitle] = useState('');
  const [editoTxt, setEditoTxt] = useState('');


  useEffect(() => {
    fetch('http://localhost:3000/edito')
      .then(response => response.json())
      .then(data => {
        setEditoTitle(data.title)
        setEditoTxt(data.text)
        console.log(data.title)
        console.log(data.text)
      });
  }, []);
 
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
          <EditorialWrapper editoTitle={editoTitle} editoTxt={editoTxt}/>
        </div>
    
        
        
        <Banner/>

        <div style={{ zIndex: 4 }} className={styles.jobCardsWrapper} >
          <JobCardsWrapper/>
        </div>
        
       
       

        <br /><br /><br /><br />
        <div id="scrollTo"></div>
  
        

       
   
         <BusinessCard />
    </div>
  );
}

export default Home;
