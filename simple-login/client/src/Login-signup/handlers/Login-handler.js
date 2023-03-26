
import Axios from 'axios';
import Cookies from 'js-cookie';
const LoginHandler = async (email, password) => {
          return   await Axios.get('http://localhost:4000/api/user-login',
            {headers: { 'Content-Type': 'application/json', },
            data: {},
            params:{
                Email: email,
                Password: password
            }})
            .then(res => {
                try {
                    
                 
                    if(res.data === "Invalid email or password.")  {
                        return res.data
                    }
                    else if (res.data === "No user found.") {
                        console.log("error")
                       
                        return res.data
                    }
                    else {
                        Cookies.set('user_token', res.data["token"].split(' ')[1])
                        Cookies.set('id', res.data["id"])
                        console.log(res.data["id"])
                        return res.statusText
                    }
                }
                catch (error) {
                    console.error(error); res.sendStatus(500);
                }
              
            })
    

  

   
}
export default LoginHandler;
