import axios from "axios";

export default class AuthenticationService{
    registerjobseeker(values){
        return axios.post("http://localhost:8080/api/authentications/registerjobseeker",values)
    }
}