import axios from "axios";

export default class JobWorkingTypeService{

    getJobWorkingTypes(){
        return axios.get("http://localhost:8080/api/workingtypes/getall");
    }

}