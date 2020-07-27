import { Component, OnInit } from '@angular/core';

import {VeiculosService} from './veiculos/veiculos.service'

import {VeiculosComponent} from './veiculos/veiculos.component'

@Component({
  selector: "app-root",
  templateUrl: './veiculos/veiculos.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'client';
}
