import './App.css';
import Context from './Components/Context';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <Context>
        <Parent/>
      </Context>
    </div>
  );
}

export default App;
