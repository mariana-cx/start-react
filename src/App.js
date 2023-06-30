import './App.css';
// import components 
import { InputData } from './components/InputDatas';
import { MyName } from './components/MyName';

export function AppLearnReact() {

  let people = ['João Henrique Xavier', 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah'];

  return (
    <div className="App">
      <header className="App-header">
        {/* imported components */}
        <InputData buttonType="Add" />
        {
          // map function (loop through array and output my name for each element)
          people.map((eachPeople, index) => (
            <div key={index}>
              <MyName myName={eachPeople} />
            </div>
          ))
        }
        <InputData buttonType="Cancel" />
      </header>
    </div>
  );
}

