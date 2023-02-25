import styles from '../../styles/Slider.module.css';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slider() {


  return (

    <div className={styles.container}>

        <div className={styles.searchBox}>
          <h1>3254 Offres d'emploi</h1>

            <div className={styles.formWrapper}>
              <div>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={jobs}
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
                renderInput={(params) => <TextField {...params} label="Poste" 
            
                />}
                />
              </div>
              <div>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={shops}
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
              <Button sx={{ height: '99%' }} variant="contained">OK</Button>
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const jobs = [
  { label: 'Manutention', year: 1994 },
  { label: 'Employé', year: 1972 },
  { label: 'Caisse', year: 1974 },
  { label: 'Exemple', year: 2008 },
  { label: 'Exemple', year: 1957 },
  { label: "Exemple", year: 1993 },
];

const shops = [
  { label: 'Pedro shop - 13 200', year: 1994 },
  { label: 'Magasin Marseille - 13600', year: 1972 },
  { label: 'MILLANCOURT ET NICOLAS - 78260', year: 1974 },
  { label: 'Magasin 4', year: 2008 },
  { label: 'Magasin 5', year: 1957 },
  { label: "Magasin 6", year: 1993 },
];