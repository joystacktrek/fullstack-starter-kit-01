
import './App.css';
import Fetch_data from './fetch_data';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    {/* //this is the component that fetches data from the database */}
    <Fetch_data/>
    </div>
  );
}

export default App;
