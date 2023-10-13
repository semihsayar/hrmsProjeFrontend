import axios from "axios";

export default class JobAdvertisementService{
    
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getjobadvertisementdtobystatustrue");
    }    

    getById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id=" + id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobadvertisements/add",values)
    }
}