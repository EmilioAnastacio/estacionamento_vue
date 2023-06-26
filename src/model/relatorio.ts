import { Condutor } from "./condutor"
import { Veiculo } from "./veiculo"

export class Relatorio
{
    entrada!: Date
    saida!: Date
    condutor!: Condutor
    veiculo!: Veiculo
    quantidadeHoras!: number
    quantidadeDesconto!: number
    valorPagar!: number
    valorDesconto!: number

}
