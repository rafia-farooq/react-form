import { AppBar, Toolbar, IconButton, Typography, List, ListItem, 
    ListItemText, Drawer, Badge, Button, Menu, MenuItem, FormControlLabel, 
    FormGroup, Switch, Grid } from "@material-ui/core";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import css from './App.module.css'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

export default function TopBar(){

    const [bar, setBar] = useState(null)

    const openBar = (event) => {
        setBar(event.currentTarget)
    }

    const closeBar = () => {
        setBar(null)
    }

    const [open, setOpen] = useState (null)
    
    const openMenu  = (event) => {
        setOpen (event.currentTarget)
    }
    const closeMenu = () => {
        setOpen (null)
    }

    const [status, setStatus] = useState (false)

    const changeStatus = (event) => {
        setStatus(event.target.checked)
    }

    const [color, setColor] = useState (false)

    const changeColor = (event) => {
        setColor(event.target.checked)
    }

    const barMenu = 
        <List style={{width: "300px"}}>
            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Courses</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Profile</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Offers</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Members</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>Projects</ListItemText>
            </ListItem>

            <ListItem button onClick={closeBar} className={css.blue}>
                <ListItemText>More</ListItemText>
            </ListItem>
        </List>
        
    

    return (
            <>
                <Grid container justify="flex-end" alignitems="center">
                    <Grid item>
                        <Typography variant="h5">
                            User Status
                        </Typography>                        
                    </Grid> 

                    <Grid item style={{marginLeft: "20px"}}>
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={status} onChange={changeStatus}/>}
                            label={status ? 'Logged In' : 'Logged Out'}/>
                        </FormGroup>
                    </Grid>

                    <Grid item>
                        <Typography variant="h5">
                            Theme
                        </Typography>                        
                    </Grid> 

                    <Grid item style={{marginLeft: "20px"}}>
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={color} onChange={changeColor}/>}
                            label={color ? 'Dark' : 'Light'}/>
                        </FormGroup>
                    </Grid>

                </Grid>
                
                {color && (
                    <AppBar position="sticky" color="secondary">
                    <Toolbar>
                        <IconButton color={"inherit"} onClick={openBar}>
                            <MenuIcon/>
                        </IconButton> 
                        <Typography  style={{flexGrow: "1"}}>Drawer Menu</Typography>  

                        {
                            status && (
                                <>
                                    <IconButton color={"inherit"}>
                                        <Badge badgeContent={5} color={"primary"}>
                                            <AccountCircleTwoToneIcon/>
                                        </Badge>                
                                    </IconButton> 
            
                                    <IconButton color={"inherit"}>
                                        <Badge badgeContent={20} color={"primary"}>
                                            <ExitToAppTwoToneIcon/>
                                        </Badge>                
                                    </IconButton> 
            
                                    <Button variant={"contained"} color="primary" onClick={openMenu} style={{marginLeft: "60px"}}>Menu</Button>
                                    <Menu
                                        open={Boolean(open)}
                                        onClose={closeMenu}
                                        anchorEl={open}
                                    >
                                        <MenuItem onClick={closeMenu}>Profile</MenuItem>
                                        <MenuItem onClick={closeMenu}>Work</MenuItem>
                                        <MenuItem onClick={closeMenu}>Details</MenuItem>
                                        <MenuItem onClick={closeMenu}>Contact</MenuItem>
                                    </Menu>  
                                    </>  
                            )
                        }
                                        
                    </Toolbar>
                </AppBar>
                )}

            {!color && (
                    <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <IconButton color={"inherit"} onClick={openBar}>
                            <MenuIcon/>
                        </IconButton> 
                        <Typography  style={{flexGrow: "1"}}>Drawer Menu</Typography>  

                        {
                            status && (
                                <>
                                    <IconButton color={"inherit"}>
                                        <Badge badgeContent={5} color={"secondary"}>
                                            <AccountCircleTwoToneIcon/>
                                        </Badge>                
                                    </IconButton> 
            
                                    <IconButton color={"inherit"}>
                                        <Badge badgeContent={20} color={"secondary"}>
                                            <ExitToAppTwoToneIcon/>
                                        </Badge>                
                                    </IconButton> 
            
                                    <Button variant={"contained"} onClick={openMenu} style={{marginLeft: "60px"}}>Menu</Button>
                                    <Menu
                                        open={Boolean(open)}
                                        onClose={closeMenu}
                                        anchorEl={open}
                                    >
                                        <MenuItem onClick={closeMenu}>Profile</MenuItem>
                                        <MenuItem onClick={closeMenu}>Work</MenuItem>
                                        <MenuItem onClick={closeMenu}>Details</MenuItem>
                                        <MenuItem onClick={closeMenu}>Contact</MenuItem>
                                    </Menu>  
                                    </>  
                            )
                        }
                                        
                    </Toolbar>
                </AppBar>
                )}
                

            <Drawer anchor={"right"} open={Boolean(bar)} onClose={closeBar}>
                {barMenu}      
            </Drawer>

           
    
            </>
    )
}