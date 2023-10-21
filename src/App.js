import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import Alert from './components/Alerts';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert('Light mode has been enable', 'success');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      showAlert('Dark mode has been enable', 'success');
      document.body.style.backgroundColor = '#1c1b1b';
    }
  };
  return (
    // <Router>
    <>
      {' '}
      <Navbar
        title='TextUtils'
        aboutText=' About TextUtils'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes>
          <Route path='/about' element={<About />} /> */}

        {/* <Route
            path='/'
            element={
             
            }
          /> */}
        <FormText
          heading='Enter the text to analyze'
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
