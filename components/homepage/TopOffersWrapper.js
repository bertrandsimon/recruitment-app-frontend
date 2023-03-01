import styles from '../../styles/TopOffersWrapper.module.css';
import Image from 'next/image';

import Tags from './Tags';
import TopOffers from './TopOffers';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function TopOffersWrapper() {

  const [topOffersData, setTopOfferssData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        
        setTopOfferssData(data.topOffers);
        //console.log('jobsData :', jobsData)
      });
  }, []);

  

  const prevSlide = () => {
    setSlideIndex(Math.max(slideIndex - 1, 0));
  };

  const nextSlide = () => {
    setSlideIndex(Math.min(slideIndex + 1, 8));
  };

  const topOfferCard = topOffersData.map( (data,i) => {
    return <Card key={i} {...data} />
  })

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
      
      {topOfferCard}

      </div>

      </div>
    </div>

    
  );
}


export default TopOffersWrapper;