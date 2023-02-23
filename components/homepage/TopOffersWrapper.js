import styles from '../../styles/TopOffersWrapper.module.css';
import Image from 'next/image';

import Tags from './Tags';
import TopOffers from './TopOffers';
import Card from './Card';
import React, { useState } from 'react';

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
        <span className={styles.prevButton} onClick={prevSlide}>
         next
        </span>
        <span className={styles.nextButton} onClick={nextSlide}>
          prev
        </span>
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