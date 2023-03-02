import styles from '../../styles/Slider.module.css';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

function Slider() {

  const [jobNames, setJobNames] = useState([])
  const [storesNames, setStoresNames] = useState([])
  const [jobNameSelected, setJobNameSelected] = useState('')
  console.log(jobNameSelected)
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setJobNameSelected(jobNameSelected)
    console.log('clicked')
    console.log('jobNameSelected:', jobNameSelected)
  };

  useEffect(() => {
    fetch('http://localhost:3000/jobs/inputData')
      .then(response => response.json())
      .then(data => {
        setJobNames(data.postes);
        setStoresNames(data.stores);
      });
  }, []);

  
  //console.log(jobNames)
  //console.log(storesNames)
  
  // const jobs = [
  //   { label: 'Manutention', year: 1994 },
  //   { label: 'Employé', year: 1972 },
  //   { label: 'Caisse', year: 1974 },
  //   { label: 'Exemple', year: 2008 },
  //   { label: 'Exemple', year: 1957 },
  //   { label: "Exemple", year: 1993 },
  // ];
  
  // const shops = [
  //   { label: 'Pedro shop - 13 200', year: 1994 },
  //   { label: 'Magasin Marseille - 13600', year: 1972 },
  //   { label: 'MILLANCOURT ET NICOLAS - 78260', year: 1974 },
  //   { label: 'Magasin 4', year: 2008 },
  //   { label: 'Magasin 5', year: 1957 },
  //   { label: "Magasin 6", year: 1993 },
  // ];

  const jobsCount = useSelector((state) => state.jobs.jobs);

  return (

    <div className={styles.container}>

        <div className={styles.searchBox}>
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
         

        </div>
      
        <div className={styles.employeeTag}>
          <span className={styles.employeeName}>Céline</span>
          
          <span className={styles.employeeJob}>Resp. des matériaux</span>
        </div>
      
    </div>

  );
}

export default Slider;


