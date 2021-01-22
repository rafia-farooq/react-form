import ButtonNav from './ButtonNav.js';
import CustomForm from './CustomForm.js';
import DrawerNav from './MaterialDrawer.js';
import TopBar from './TopBar.js';


function App() {
  return (
    <>
      <TopBar></TopBar>
      <div style={{margin: "100px 40px", display: "flex", justifyContent: "space-between"}}>
          <DrawerNav></DrawerNav>

          <ButtonNav></ButtonNav>
      </div>

      <CustomForm></CustomForm>
      
      
    </>
  );
}

export default App;
