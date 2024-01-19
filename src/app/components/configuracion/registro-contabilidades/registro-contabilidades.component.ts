import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-contabilidades',
  templateUrl: './registro-contabilidades.component.html',
  styleUrls: ['./registro-contabilidades.component.css']
})
export class RegistroContabilidadesComponent implements OnInit {

  opcion = 0;
  
  constructor() { }

  ngOnInit() {
  }

  operacion() {
    if (this.opcion == 1) {
      // Toda la lógica de guardado

      this.opcion = 0;
    } else {
      // Toda la lógica para entrar en modo edición

      this.opcion = 1;
    }
  }
}
