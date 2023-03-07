import styles from '../../styles/JobCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import {applyJob} from '../../reducers/applyReducer';

function JobCard(props) {

  
  const appliedJobs = useSelector((state) => state.applyReducer.value);
  const [likedJob, setLikedJob] = useState([]);
  
//  const [newColor, setNewColor]= useState("");
 let newColor= "";

  console.log('appliedJobs', appliedJobs)
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = useSelector((state) => state.user.token);
  console.log("token",token)
  //console.log('token is =', token)
  
  const handleApply = (token, id) => {
    //console.log(token)
    fetch('http://localhost:3000/jobs/applied', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token:token, idJob:id }),
    }).then(response => response.json())
      .then(data => {
        //console.log(data);

       dispatch(applyJob(id)); 
        handleClose(); 
      })
      .catch(error => {
        console.log(error); // Log any errors that occur
      });
      
      
   
  };

  const isJobApplied = appliedJobs.includes(props._id);

  const handleLikeJob = () => {
    props.updateLikedJob(props.title);
  };
  let heartIconStyle = { 'cursor': 'pointer' };
  if (props.isLiked) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }

   // Liked JobCard (inverse data flow)
   const updateLikedJob = () => {
    console.log(token)
    if (likedJob.find(job => job.title === props.title)) {
      setLikedJob(likedJob.filter(job => job.title !== props.title));
        fetch('http://localhost:3000/jobs/deleteLiked', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idJob: props._id , token: token,
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result) {
      console.log('Le travail a été supprimé avec succès de la liste des travaux préférés');
    } else {
      console.log('Une erreur s\'est produite lors de la suppression du travail de la liste des travaux préférés');
    }
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la tentative de suppression du travail de la liste des travaux préférés:', error);
  });
    } else {
      setLikedJob([...likedJob, props]);
     
      fetch('http://localhost:3000/jobs/liked',{
      method: 'Post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: token, idJob: props._id})
      
    })
    .then (response => response.json())
    .then (data => console.log(data))
    }
    
  };
if (likedJob.find (job => job.title === props.title)){
  newColor="#B00620"
}else{
  newColor=""
}

  
  
  
  //console.log('props._id', props._id)
  //console.log('isJobApplied', isJobApplied)
  return (

    <div className={styles.jobCardContainer}>
    
      <div className={styles.headerWrapper}>
        <div onClick={handleClickOpen}><h5>{props.title}</h5></div>
        <div className={styles.heart}><Tooltip title="Mettre en favori"><FontAwesomeIcon icon={faHeart} style={{color: newColor}}  onClick={()=> updateLikedJob()}/></Tooltip></div>
      </div>

      <div className={styles.subWrapper}>
        <div><Image src={props.jobImage} width={100} height={100} style={{ borderRadius: '6px' }}/></div>
        <div className={styles.titleWrapper}>
          <div><span>Subtitle CP</span></div>
          <div className={styles.line}> </div>
          <div className={styles.tag}>CDI</div>
        </div>
      </div>

      <div className={styles.textWrapper}>
        <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        
      </div>

      <div>
        <span className={styles.dateFrom}>{props.date}</span>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

        <div className={styles.jobCardContainerModal}>
          <div className={styles.headerWrapper}>
            <div><h5>{props.title}</h5></div>
            <div className={styles.heart}><FontAwesomeIcon icon={faHeart} className="far" /></div>
          </div>

        <div className={styles.subWrapper}>
          <div><Image src={props.jobImage} width={75} height={75} style={{ borderRadius: '6px' }}/></div>
          
          <div className={styles.titleWrapper}>
            <div><span>Subtitle CP</span></div>
            <div className={styles.line}> </div>
            <div className={styles.tag}>CDI</div>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Description</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
          
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Missions</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Profil</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Modalités de contrat</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div>
          {isJobApplied ? (
            <div className={styles.ctaWhiteInactive}><span>Déja postulé</span></div>
          ) : (
            <div className={styles.ctaWhite} onClick={() => handleApply(token, props._id)}><span>Je postule</span></div>
          )}
        </div>


       
        </div>

        </DialogContent>
  
      </Dialog>
   
    </div>

  );
}

export default JobCard;