import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode =()=>{
    if(mode==='light')
    {
     setMode('dark');
     document.body.style.backgroundColor='grey';
     showAlert('Dark Mode Has Been Enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Has Been Enabled','success');
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title='TextUtils' aboutTitle="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path={"/about"} element={<About/>}/>
        <Route exact path={"/"} element={<TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
//         <Route exact path={"/"} element={}/>