import styles from '../../styles/Tags.module.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import { searchJobSelected, jobTagSelected } from '../../reducers/jobs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const style = {
  width: '100%',
  maxWidth: 300,
  bgcolor: 'background.paper',
};


function Tags() {

  const [allTags, setAllTags] = useState([])

  const dispatch = useDispatch();
  
  const handleSubmit = (key) => {
    dispatch(jobTagSelected(key))
    console.log(key)
  };


  useEffect (() => {countJobs()},[])
    
    const countJobs = () => {
      let allTag = []
      fetch('https://jobimat-backend-final.vercel.app/jobs/byTypes', {
      }).then(response => response.json())
        .then(data => {
          
          allTag = data.jobsByType.map((data,i) => {
            return (
            <div key={i} >
              <ListItem button onClick={() => handleSubmit(data.key)}>
              <ListItemText primary={data.key} /><Badge badgeContent={data.nb} color="ternary" max={999} className={styles.badgeBg}></Badge>
              </ListItem>
              <Divider />
            </div>
          )})
          setAllTags(allTag)
        });
    };

  
  return (

    <div className={styles.container}>

    <List sx={style} component="nav">
        <div key={'allTags'} >
              <ListItem button onClick={() => handleSubmit('allTags')}>
              <ListItemText primary={'Toutes les offres'} />
              </ListItem>
              <Divider />
      </div>
      {allTags}
    
    </List>
    
        
    </div>

  );
}

export default Tags;