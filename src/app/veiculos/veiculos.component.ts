import {Component, OnInit} from '@angular/core'

import {Veiculo} from './veiculo'
import {VeiculosService} from './veiculos.service'

@Component({
    selector: "app-veiculos",
    templateUrl: './veiculos.component.html',
    providers: [VeiculosService]
})

export class VeiculosComponent implements OnInit  {
    veiculos: Veiculo[]
    editVeiculo: Veiculo

    constructor(private veiculoService: VeiculosService) {}


    ngOnInit() {
        this.getVeiculos()
    }

    getVeiculos():void{
        this.veiculoService.getVeiculos().subscribe(veiculos => (this.veiculos = veiculos))
    }

    add(nome: string, modelo: string, marca: string): void{
        this.editVeiculo = undefined
        nome = nome.trim()
        modelo = modelo.trim()
        marca = marca.trim()
        if(!nome){
            return
        }

        const newVeiculo: Veiculo = {marca} as Veiculo
        this.veiculoService.addVeiculo(newVeiculo).subscribe(veiculo => this.veiculos.push(veiculo))
    }

    delete(veiculo: Veiculo): void {
        this.veiculos = this.veiculos.filter(h => h !== veiculo)
        this.veiculoService.deleteVeiculo(veiculo.id).subscribe()
    }

    edit(veiculo){
        this.editVeiculo = veiculo
    }

    update() {
        if(this.editVeiculo) {
            this.veiculoService.updateVeiculo(this.editVeiculo).subscribe(veiculo => {
                const ix = veiculo ? this.veiculos.findIndex(h => h.id === veiculo.id) : -1
                if (ix > -1) {
                    this.veiculos[ix] = veiculo
                }
            })
            this.editVeiculo = undefined
        }
    }
}
