import { AbstractEntity } from "./abstract.entity"

export class Condutor extends AbstractEntity
{
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago!: number
    tempoDescontp!: number

    constructor(){
        super()
        this.ativo=true
    }
}