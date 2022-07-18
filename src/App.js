import './App.css';
import TourList from './components/TourList';
import {useState} from 'react';
import Mode from './components/Mode/Mode'


function App() {
  const [mode, setMode] = useState({current: "day"})

  return (
  <div className="App">
    <Mode mode={mode} changeMode={setMode}/>
    <TourList mode={mode}/>
  </div>
  )
}

export default App;
