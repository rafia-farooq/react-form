import { Button, Grid, TextField, Typography } from "@material-ui/core";
import DraftsIcon from '@material-ui/icons/Drafts';
import { useState } from "react";


export default function CustomForm(){

    const [data, setData] = useState('Your info')

    const showData = (event) => {
        setData(event.target.value)
    }

    return (
        <div style={{width: "40%", backgroundColor : "lightgray", margin: "40px auto", padding: "50px"}}>

            <Typography variant="h4"> Registeration Form</Typography>

            <div>
                <TextField variant="filled" disabled rowsMax="5" value={data} placeholder="Your info" style={{margin: "10px"}} />
            </div>

            <form>
                <Grid container alignItems={"center"}>
                    <Grid>
                        <DraftsIcon color="secondary" style={{marginRight: "10px"}}/>
                    </Grid>

                    <Grid>
                        <TextField label="Email Address" type ="text" required style={{marginBottom: "30px"}} onChange={showData}/><br/>
                    </Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                    <Grid>
                        <DraftsIcon color="secondary" style={{marginRight: "10px"}}/>
                    </Grid>

                    <Grid>
                        <TextField label="Password" type ="password" helperText="Password must contain a symbol" required style={{marginBottom: "30px"}}/><br/>
                    </Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                    <Grid>
                        <DraftsIcon color="secondary" style={{marginRight: "10px"}}/>
                    </Grid>

                    <Grid>
                        <TextField label="Confirm Password" type ="password" required style={{marginBottom: "30px"}}/><br/>
                    </Grid>
                </Grid>
                
                <Button variant="contained" color="secondary">Submit</Button>
            </form>
        </div>
    )
}