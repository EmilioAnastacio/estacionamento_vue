import axios, {AxiosInstance} from "axios";

export class ModeloClient{

    private axiosModelo : AxiosInstance;

    constructor(){
        this.axiosModelo = axios.create({
            baseURL:"http://localhost:8080/api/modelo",
            headers:{"Content-Type" : "application/JSON"}
        })
    }
}
