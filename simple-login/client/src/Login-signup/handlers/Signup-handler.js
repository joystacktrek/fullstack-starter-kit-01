import axios from "axios";

const SignupHandler = (f_name, l_name, email, password) => {
   

    const registration = async () => {
       await axios.post('http://localhost:4000/api/user-signup',
            {headers: { 'Content-Type': 'application/json'},
             f_name, l_name, email, password})
            .then(res => {
                console.log(res)
                return res.status
            }
        )
    }

    registration()

  
}
export default SignupHandler;
