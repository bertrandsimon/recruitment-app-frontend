import styles from '../../styles/CareersCards.module.css';
import Image from 'next/image';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
function CareersCards() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (

    <div className={styles.container}>

      <div className={styles.cardContainer} onClick={handleClickOpen}>
        <div className={styles.imgWrapper1}></div>
        <div className={styles.textWrapper}>
          <span>Conseiller de vente</span>
        </div>
      </div>
    

      <div className={styles.cardContainer} onClick={handleClickOpen}>
        <div className={styles.imgWrapper2}></div>
        <div className={styles.textWrapper}>
          <span>Conseiller libre Service</span>
        </div>
      </div>

      <div className={styles.cardContainer} onClick={handleClickOpen}>
        <div className={styles.imgWrapper3}></div>
        <div className={styles.textWrapper}>
          <span>Vendeur salle expo</span>
        </div>
      </div>

      <div className={styles.cardContainer} onClick={handleClickOpen}>
        <div className={styles.imgWrapper4}></div>
        <div className={styles.textWrapper}>
          <span>Attaché technique</span>
        </div>
      </div>

      <div className={styles.cardContainer} onClick={handleClickOpen}>
        <div className={styles.imgWrapper5}></div>
        <div className={styles.textWrapper}>
          <span>Magasinier vendeur</span>
        </div>
      </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

          

        <div className={styles.modalContainer}>
        <hr />
        <br />
        <br />
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.</span>
        <br />
        <br />
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est esse eveniet eos accusamus vitae harum dolorem architecto commodi, pariatur quaerat tempore error labore quo? Vel adipisci modi sit quasi.</span>
        
        <br />
        <br />
        <hr />

        
        </div>
         

        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default CareersCards;