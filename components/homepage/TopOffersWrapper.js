import styles from '../../styles/TopOffersWrapper.module.css';
import Image from 'next/image';

import Tags from './Tags';
import Card from './Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function TopOffersWrapper() {

  const [topOffersData, setTopOfferssData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [loadingTags, setLoadingTags] = useState(true);

  const jobTagSelected = useSelector((state) => state.jobs.tagSelected);
  


  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        if(jobTagSelected != 'allTags') {
          const filteredDatas = data.topOffers.filter(data => data.jobType.typeName === jobTagSelected);
          setTopOfferssData(filteredDatas);
        }
        else {
          const filteredDatas = data.topOffers;
          setTopOfferssData(filteredDatas);
        }
      });
  }, [jobTagSelected]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoadingTags(false);
    }, 1000);
    return () => clearTimeout(timer);
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
             
      {loadingTags ? (
        <LinearProgress color="ternary" style={{ marginTop: '170px' }} />
      ) : (
        <Tags />
      )}
            
            
      </div>

      <div className={styles.cardsWrapper} style={{ transform: `translateX(-${slideIndex * 300}px)` }}>
      {loadingTags ? (
        <>
          <div className={styles.progressContainer}>
           
            <CircularProgress color="ternary"/>
           
          </div>
        </>
      ) : (
        <>{topOfferCard}</>
      )}
      
     
      </div>
     
      </div>
    </div>

    
  );
}


export default TopOffersWrapper;