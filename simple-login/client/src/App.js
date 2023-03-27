
import './App.css';
//we import the component from fetch_data.js. this component will fetch data from the database
import Fetch_data from './fetch_data';
//import LoginPage from './Loginform';

//lets import react router dom to enable routing through different pages
import { useRoutes} from 'react-router-dom'

//lets now import the login and signup component
import Login from './Login-signup/Login';
import Signup from './Login-signup/Signup';



//we create a function that will load other components based on the path
const Routing = () => {
  const routes = useRoutes([
    {path: '/login', element: <Login/>},
    {path: '/', element: <Fetch_data/>},
    {path: '/signup', element: <Signup/>}
  ])
  return routes
}

function App() {
  return (
    <div className="text-center flex justify-center items-center h-screen">
    {/* we call the `Routing` function to load other components here */}
    <Routing/> 
    </div>
  );
}





export default App;
