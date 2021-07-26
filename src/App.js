import './App.css';
import Input from './components/Input';
import { useState, useEffect } from 'react';

function App() {
  
  const [query, setQuery] = useState("react");

  //úgy adjuk át, mint egy propsot  
  const inputDefault = {
    query: "react",
    qLength: 300
  };

  const inputQuery = (event) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    console.log(query);
  }, [query])

  return (
    <div>

      {/* <Input data={inputDefault}/> */}
      {/* <Input query={inputDefault.query} qlength={inputDefault.qLength}/> */}
      {/* <input onChange={inputQuery}/> */}
      <input value={query} onChange={(event) => setQuery(event.target.value)} />

    </div>
  );
}

export default App;
