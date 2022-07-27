import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Main from './components/Main';


function App() {
  const [mode, setMode] = useState({current: "day"})

  return (
  <div>
    <BrowserRouter>
      <nav>
          <Link to='/'>Домой</Link>&nbsp;
          <Link to='/profile'>Профиль</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Main mode={mode}/>}/>
        <Route path='/profile' element={<Profile mode={mode} setMode={setMode}/>}/>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App;
