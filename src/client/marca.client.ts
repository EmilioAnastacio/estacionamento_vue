import { Marca } from "@/model/marca";
import axios, {AxiosInstance} from "axios";

class MarcaClient{

    private axiosMarca : AxiosInstance;

    constructor(){
        this.axiosMarca = axios.create({
            baseURL:"http://localhost:8080/api/marca",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Marca>{
        try{
            return(await this.axiosMarca.get<Marca>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listaAll() : Promise<Marca[]>{
        try{
            return(await this.axiosMarca.get<Marca[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<string>{
        try{
            return(await this.axiosMarca.post<string>(``, marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, marca: Marca): Promise<string>{
        try{
            return(await this.axiosMarca.put<string>(`/${id}`, marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(id:number) : Promise<string>{
        try{
            return(await this.axiosMarca.delete<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new MarcaClient;