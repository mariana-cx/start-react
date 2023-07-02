import './App.css';
import { Card } from './components/Card';
// import components 
import { InputData } from './components/InputDatas';
import { MyName } from './components/MyName';

export function AppLearnReact() {

  return (
    <div className="App">
      <header className="App-header">
        {/* imported components */}
        <Card />
      </header>
    </div>
  );
}



