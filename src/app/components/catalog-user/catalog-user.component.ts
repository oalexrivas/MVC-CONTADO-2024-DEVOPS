import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-user',
  templateUrl: './catalog-user.component.html',
  styleUrls: ['./catalog-user.component.css']
})
export class CatalogUserComponent {
  desplegarActivo:boolean = false;
  desplegarInvetarios:boolean = false;
  desplegarPagos:boolean = false;
  desplegarActivosNoCorrientes:boolean = false;
  desplegarDepreciacion:boolean = false;
  desplegarActivosIntangibles:boolean = false;

  constructor() {}

  onDisplay() {
    
  }
}
