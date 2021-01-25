import { Accordion, AccordionSummary, AccordionDetails, Typography, AccordionActions, Button } from "@material-ui/core";
import { useState } from "react";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default function CustomAccordion(){
    const[accordion, setAccordion]= useState(false)

    const toggle = (panel) => (a, isPanel) =>
        {setAccordion(isPanel ? panel : false)}


    return(
        <div style={{width: "70%", margin: "0 auto"}}>
                    <Accordion onChange={toggle('a1')} expanded={accordion === 'a1'}>
                        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon/>}>
                            <Typography variant="h5">General Information</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                                    Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </AccordionDetails>

                        <AccordionActions>
                            <Button color="primary">View More</Button>
                            <Button color="primary">Close</Button>
                        </AccordionActions>
                    
                    </Accordion>

                    <Accordion onChange={toggle('a2')} expanded={accordion === 'a2'}>
                        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon/>}>
                            <Typography variant="h5">FAQ</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography variant="p">Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    <br/>
                                                    A: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    <br/>
                                                    Q: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    <br/>
                                                    A: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                                    Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </AccordionDetails>

                        <AccordionActions>
                            <Button color="primary">View More</Button>
                            <Button color="primary">Close</Button>
                        </AccordionActions>

                    
                    </Accordion>
            
        </div>
    )
}