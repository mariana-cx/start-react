import './App.css';
import { useEffect, useState } from 'react';

let people = ['João Henrique Xavier', 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah'];

export function AppLearnReact() {
  const [names, setNames] = useState(people)
  const [currentName, setCurrentName] = useState("")
  const [newArr, setNewArr] = useState([])
  useEffect(() => {
    // setCurrentName("")
  }, [names])
  function removeName(arrNames, index) {
    let result = arrNames.filter((_e,i) => i != index)
    setNewArr([...newArr, arrNames[index]])

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

      {names.map((e,i) => <p onClick={() => setNames(removeName(names, i))} key={i}>{e}</p>)}

    </div>
    <div className='Box'>
      {newArr.map((e,i) => <p key={i}>{e}</p>)}

    </div>
  </div >

  );
}