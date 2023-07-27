import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

let people = ['João Henrique Xavier', 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah'];

export function AppLearnReact() {
  const [names, setNames] = useState(people)
  const [currentName, setCurrentName] = useState("")
  const [newArr, setNewArr] = useState([])
  useEffect(() => {
    setCurrentName("")
  }, [names])
  function removeName(arrNames, person) {
    let result = arrNames.filter(e => e != person)
    setNewArr([...newArr, person])

    return result
  }
  
  return (<div className="App">
    <div className="App-header">
      <span>
        <input value={currentName} onChange={(e) => setCurrentName(e.target.value)
        } />
        <button className="inputButton" onClick={() => {
          setNames([...names, currentName]);
          setCurrentName("");

        }}><strong>Add</strong></button>
      </span>

      {names.map(e => <p onClick={() => setNames(removeName(names, e))} key={e}>{e}</p>)}

    </div>
    <div className='Box'>
      {newArr.map(e => <p key={e}>{e}</p>)}

    </div>
  </div >

  );
}