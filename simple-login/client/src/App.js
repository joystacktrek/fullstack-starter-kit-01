

//lets import react router dom to enable routing through different pages
import { useRoutes} from 'react-router-dom'

//lets now import the login and signup component
import Login from './Login-signup/Login';

import Signup from './Login-signup/Signup';
//we import the component from fetch_data.js. this component will fetch data from the database
import FetchData from './FetchData';


//we create a function that will load other components based on the path
const Routing = () => {
  const routes = useRoutes([
    {path: '/login', element: <Login/>},
    {path: '/', element: <FetchData/>},
    {path: '/signup', element: <Signup/>}
  ])
  return routes
}

const App = ()=>{
  return (
    <div className="text-center flex justify-center items-center h-screen">
    {/* we call the `Routing` function to load other components here */}
    <Routing/> 
    </div>
  );
}


export default App;
