import styles from '../../styles/Tags.module.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';


const style = {
  width: '100%',
  maxWidth: 300,
  bgcolor: 'background.paper',
};


function Tags() {

  const [allTags, setAllTags] = useState([])

  useEffect (() => {countJobs()},[])
    
    const countJobs = () => {
      let allTag = []
      fetch('http://localhost:3000/jobs/byTypes', {
      }).then(response => response.json())
        .then(data => {
          
          //console.log(typeof data.jobsByType)
          allTag = data.jobsByType.map((data,i) => {
            return (
            <div key={i}>
              <ListItem button>
              <ListItemText primary={data.key} /><Badge badgeContent={data.nb} color="primary"></Badge>
              </ListItem>
              <Divider />
            </div>
          )})
          setAllTags(allTag)
        });
    };


  return (

    <div className={styles.container}>

    <List sx={style} component="nav" aria-label="mailbox folders">
      
      {allTags}
    
    </List>
    
        
    </div>

  );
}

export default Tags;