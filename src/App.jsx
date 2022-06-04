import './App.css';
import { Users } from "./users"
import React, { useState } from 'react';
import Table from './Table';

function App() {

  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.disease.toLowerCase().includes(query) || item.symptoms.some(el => el.toLowerCase().includes(query)));
  }

  return (<div className='app'>
    <input type="text" placeholder='ძებნა...' className="search" onChange={e => setQuery(e.target.value)} />
    <Table data={search(Users)} />
  </div>
  );
}

export default App;
