import axios from "axios";

export default class WorkingPreferenceService{

    getWorkingPreference(){
        return axios.get("http://localhost:8080/api/workingpreferences/getall");
    }
}