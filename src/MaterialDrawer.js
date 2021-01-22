import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import { Button, Drawer, Typography } from '@material-ui/core';
import { useState } from 'react';
import css from './App.module.css';

export default function DrawerNav(){
    const list = ['Inbox', 'Outbox', 'Junk', 'Sent', 'Draft', 'Archive']

    const [nav, setNav] = useState(null)

    const openNav = (event) => {
        setNav(event.currentTarget)
    }

    const closeNav = () => {
        setNav(null)
    }

    return(
        <>
        <Button variant={"outlined"} onClick={openNav}>
            <MenuTwoToneIcon style={{color: 'green', marginRight: "5px"}}/>
            <Typography variant="p">Mail Menu</Typography>
        </Button>
        <Drawer open={Boolean(nav)} onClose={closeNav}>
            
                <List style={{width: "200px"}}>
                {list.map((value) => (
                    <ListItem button onClick={closeNav} className={css.ListItem}>
                        <ListItemIcon><MailTwoToneIcon style={{color: 'green'}}/></ListItemIcon>
                        <ListItemText>{value}</ListItemText>
                    </ListItem>
                ))}
                </List>
           
        </Drawer>
        
        </>

    )
}