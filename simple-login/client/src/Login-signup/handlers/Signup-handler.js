import axios from "axios";

const SignupHandler = async(f_name, l_name, email, password) => {
        return await axios.post('http://localhost:4000/api/user-signup',
            {headers: { 'Content-Type': 'application/json'},
             f_name, l_name, email, password})
            .then(res => {
                console.log(res)
                return res.data
            }
        )
    //we send the data to the server and get the response and return it to the component

}
export default SignupHandler;
