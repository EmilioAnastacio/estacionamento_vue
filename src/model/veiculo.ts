import { AbstractEntity } from "./abstract.entity"
import { cor } from "./cor"
import { Modelo } from "./modelo"
import { tipo } from "./tipo"

export class Veiculo extends AbstractEntity
{

    placa!: string
    modelo!: Modelo
    cor!: cor
    tipo!: tipo
    ano!: number

}
