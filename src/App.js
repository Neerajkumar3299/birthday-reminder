import { useState } from 'react';
import './App.css';
import data from './data';
import List from './Component/List';
function App() {
  const [people,setPeople]=useState(data);
  const clearAll=()=>{
    setPeople([])
  }
  return(
    <>
    <main>
      <section className="container">
        <h1>{people.length} birthday today</h1>
        <List people={people}/>
        <button className="btn" onClick={clearAll}>Clear all</button>
      </section>
    </main>
    </>
  )
}

export default App;
