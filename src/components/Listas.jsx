import React from 'react';
import {
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Divider,

} from '@material-ui/core';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Listas = () => {
    return(
        <div>
            <List component='nav'>
              <ListItem button>
                <ListItemIcon>
                    <AllOutIcon/>
                </ListItemIcon>
              </ListItem>
            </List>
        </div>
    )
}

export default Listas;