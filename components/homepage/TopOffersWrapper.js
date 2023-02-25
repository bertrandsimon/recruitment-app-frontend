import styles from '../../styles/TopOffersWrapper.module.css';
import Image from 'next/image';

import Tags from './Tags';
import TopOffers from './TopOffers';
import Card from './Card';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function TopOffersWrapper() {

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex(Math.max(slideIndex - 1, 0));
  };

  const nextSlide = () => {
    setSlideIndex(Math.min(slideIndex + 1, 8));
  };

  return (
    <div className={styles.container}>
      <div className={styles.slideNav}>
      
      <div className={styles.arrow}><FontAwesomeIcon icon={faArrowLeft}  onClick={prevSlide}/></div>
      <div className={styles.arrow}><FontAwesomeIcon icon={faArrowRight}  onClick={nextSlide}/></div>
  
      </div>


      <div className={styles.tagsAndCardscontainer}>

      <div className={styles.tagsWrapper}>
        <Tags />
        
      </div>

      <div className={styles.cardsWrapper} style={{ transform: `translateX(-${slideIndex * 300}px)` }}>
      
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      </div>
    </div>

    
  );
}


export default TopOffersWrapper;