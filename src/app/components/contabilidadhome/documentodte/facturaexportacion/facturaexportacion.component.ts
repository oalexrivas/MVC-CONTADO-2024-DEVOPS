import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id:number;
  orden: number;
  emision: string;
  comprador: number;
  vendedor:number;
  Descripcion: string;
  Pag?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,orden:1,emision:'2023/10/13',comprador:1,vendedor:1,Descripcion:'si'},
    // {id:1,orden:1,'Lugar y fecha de emisión':'2023/10/13','ID del comprador':1,'ID del vendedor':1,'Descripción':'si'},
    // {id:1,orden:1,'Lugar y fecha de emisión':'2023/10/13','ID del comprador':1,'ID del vendedor':1,'Descripción':'si'},
];

@Component({
  selector: 'app-consumidorfinal',
  templateUrl: './facturaexportacion.component.html',
  styleUrls: ['./facturaexportacion.component.css']
})
export class FacturaexportacionComponent implements OnInit {
  public verMenu:boolean = false;

  ngOnInit(): void {

  }
  displayedColumns: string[] = ['id', 'orden', 'emision', 'comprador', 'vendedor', 'Descripcion', 'Pag'];

  dataSource = ELEMENT_DATA;
}
