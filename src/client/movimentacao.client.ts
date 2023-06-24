import { Movimentacao } from "@/model/movimentacao";
import axios, {AxiosInstance} from "axios";

class MovimentacaoClient{

    private axiosMovimentacao : AxiosInstance;

    constructor(){
        this.axiosMovimentacao = axios.create({
            baseURL:"http://localhost:8080/api/movimentacao",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Movimentacao>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listaAll() : Promise<Movimentacao[]>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.post<string>(``, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, movimentacao: Movimentacao) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.put<string>(`/${id}`, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async relatorio(id: number) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.put<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }


    public async excluir(id: number) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.delete<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new MovimentacaoClient;