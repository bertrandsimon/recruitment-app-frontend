import styles from '../../styles/Tags.module.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';


const style = {
  width: '100%',
  maxWidth: 300,
  bgcolor: 'background.paper',
};


function Tags() {


  return (

    <div className={styles.container}>

<List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Manutention" /><Badge badgeContent={4} color="primary"></Badge>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Conseiller" /><Badge badgeContent={12} color="primary"></Badge>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Découpe" /><Badge badgeContent={4} color="primary"></Badge>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Découpe" /><Badge badgeContent={123} color="primary"></Badge>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Caisse" /><Badge badgeContent={4} color="primary"></Badge>
      </ListItem>
    </List>
    
        
    </div>

  );
}

export default Tags;