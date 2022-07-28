import TourList from './TourList';
 

export default function Main({mode}) {
    return (
    <div className="App">
      <h1>hello from Earth 2!</h1>
      <h2>Что-нибудь нормальное</h2>
      
      <TourList mode={mode}/>
    </div>
    )
}