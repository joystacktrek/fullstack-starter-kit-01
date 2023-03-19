
import './App.css';
//we import the component from fetch_data.js. this component will fetch data from the database
import Fetch_data from './fetch_data';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  
   {/* this is the component that we imported */}
    <Fetch_data/>
    </div>
  );
}

export default App;
