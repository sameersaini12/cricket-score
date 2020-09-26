import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import {getMatches} from './Api';
import Card from './Card';

function App() {

  const[matches , setMatches] = useState([]);

  useEffect(()=> {
    getMatches()
    .then(data => {setMatches(data.matches);
    console.log(data);})
    .catch((err)=> alert("could not load data"));
  },[])
  
  return (
    <div className="app">
      <Navbar />
      {
        matches.map(match => (
          <>
          {match.type==="Twenty20" ? (<Card key={match.unique_id} match={match} />): ("")}
          </>
        )
         ) }
    </div>
  );
}

export default App;
