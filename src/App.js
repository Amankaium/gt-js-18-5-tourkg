import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Main from './components/Main';
import Counter from './components/Counter/Counter'


function App() {

  return (
  <div>
    <BrowserRouter>
      <nav>
          <Link to='/'>Домой</Link>&nbsp;&nbsp;&nbsp;
          <Link to='/profile'>Профиль</Link>&nbsp;&nbsp;&nbsp;
          <Link to='/counter'>Счётчик(Redux)</Link>

      </nav>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App;
