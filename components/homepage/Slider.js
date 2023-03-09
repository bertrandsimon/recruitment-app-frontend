import styles from '../../styles/Slider.module.css';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import { searchJobSelected } from '../../reducers/jobs';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

// IMAGE IMPORT
import Image from 'next/image';

function Slider() {
  
  
  const [jobNames, setJobNames] = useState([])
  const [storesNames, setStoresNames] = useState([])
  const [jobNameSelected, setJobNameSelected] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(searchJobSelected(jobNameSelected))
    const targetComponent = document.getElementById('scrollTo');
    const targetOffset = targetComponent.offsetTop + 1200;
    window.scrollTo({
      top: targetOffset + 400,
      behavior: 'smooth'
    });

  };

  const jobSelectedInReducer = useSelector((state) => state.jobs.searchedJobName);
 

  useEffect(() => {
    fetch('http://localhost:3000/jobs/inputData')
      .then(response => response.json())
      .then(data => {
        setJobNames(data.postes);
        setStoresNames(data.stores);
      });
  }, []);

  
  
  const jobsCount = useSelector((state) => state.jobs.jobs);

  return (

    <div className={styles.container}>

        <div className={styles.searchBox} sx={{ zIndex: 10000 }}>
          <h1>{jobsCount} Offres d'emploi</h1>

            <div className={styles.formWrapper}>
              <div>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={jobNames}
                sx={{
                  width: 250,
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF",
                    "& .MuiInputBase-input": {
                      color: "#747474",
                      padding: "10px",
                      "&:focus": {
                        color: "#B00620"
                      }
                    }
                  },
                  "& .MuiInputLabel-root": {
                    color: "#747474"
                  },
                  "& .MuiAutocomplete-popupIndicator": {
                    color: "#747474"
                  },
                  "& .MuiAutocomplete-clearIndicator": {
                    color: "#747474"
                  },
                  "& .MuiAutocomplete-option": {
                    color: "#747474",
                    "&:hover": {
                      backgroundColor: "#F2F2F2"
                    }
                  },
                  "& .Mui-focused": {
                    "& .MuiAutocomplete-inputRoot": {
                      backgroundColor: "#FFFFFF"
                    }
                  }
                }}
                renderInput={(params) => <TextField 
                  {...params} 
                  label="Poste" 
                 
                />}
                onChange={(event, value) => setJobNameSelected(value)}
                />
              </div>
              <div>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={storesNames}
                sx={{
                  width: 250,
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF",
                    "& .MuiInputBase-input": {
                      color: "#747474",
                      padding: "10px"
                    }
                  },
                  "& .MuiInputLabel-root": {
                    color: "#747474"
                  },
                  "& .MuiAutocomplete-popupIndicator": {
                    color: "#B00620"
                  },
                  "& .MuiAutocomplete-clearIndicator": {
                    color: "#747474"
                  },
                  "& .MuiAutocomplete-option": {
                    color: "#747474",
                    "&:hover": {
                      backgroundColor: "#F2F2F2"
                    }
                  },
                  "& .Mui-focused": {
                    "& .MuiAutocomplete-inputRoot": {
                      backgroundColor: "#FFFFFF"
                    }
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Ville ou magasin" />}
                />
              </div>
              <div>
              <Button sx={{ height: '99%' }} variant="contained" onClick={() => handleSubmit()}>OK</Button>
              </div>

            </div>


            <div>

                <div className={styles.containerTopOffers}>

                <div className={styles.title2TopOffers}>
                    <span className={styles.subtitle1TopOffers}>Les offres</span> 
                    <span className={styles.subtitle2TopOffers}> du moment</span>
                    <Image src="/images/arrow2.jpg" width={19} height={27} className={styles.arrowTopOffers}/>
                </div>
                
                </div>

            </div>
         

        </div>
      
        <div className={styles.employeeTag}>
          <span className={styles.employeeName}>Patrick</span>
          
          <span className={styles.employeeJob}>Resp. des matériaux</span>
        </div>
      
    </div>

  );
}

export default Slider;


