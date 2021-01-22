import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import css from './App.module.css';


export default function Material(){
    
    return(
        <div className={css.half}>
            <div>
                <ButtonGroup variant={"contained"} color={"primary"}>
                    <Button>Home</Button>
                    <Button>Contact</Button>
                    <Button onClick={() => {alert('About Us Page')}} title={"click to see alert"}>About</Button>
                    <Button disabled>Disbaled</Button>
                    <Button variant={"outlined"}>Sign up</Button>
                    <Button href={"https://material-ui.com"} variant={"outlined"}>Material Website</Button>
                </ButtonGroup>
            </div>
                   
        </div>
       
    )
}