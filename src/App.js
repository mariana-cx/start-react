import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

let people = ['João Henrique Xavier', 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah'];

export function AppLearnReact() {
  const [names, setNames] = useState(people)
  const [currentName, setCurrentName] = useState("")
  useEffect(() => {
    setCurrentName("")
  }, [names])
  function removeName(arrNames, person) {
    let result = arrNames.filter(e => e != person)

    return result
  }
  console.log(people)
  return (<div className="App">
    <div className="App-header">
      <span>
        <input value={currentName} onChange={(e) => {
          setCurrentName(e.target.value);
          console.log("Current name is: ", currentName);
        }} />
        <button className="inputButton" onClick={() => {
          setNames([...names, currentName]);
          setCurrentName("");
        }}><strong>Add</strong></button>
      </span>

      {names.map(e => <p onClick={() => setNames(removeName(names, e))} key={e}>{e}</p>)}

    </div>
    <div className='Box'>
      
    </div>
  </div >
  
  );
}