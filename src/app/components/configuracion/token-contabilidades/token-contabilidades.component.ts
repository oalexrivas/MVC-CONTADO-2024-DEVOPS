import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-contabilidades',
  templateUrl: './token-contabilidades.component.html',
  styleUrls: ['./token-contabilidades.component.css']
})
export class RegistroTokenComponent implements OnInit {

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
