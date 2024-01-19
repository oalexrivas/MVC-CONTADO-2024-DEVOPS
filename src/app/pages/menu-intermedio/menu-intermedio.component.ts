import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-intermedio',
  templateUrl: './menu-intermedio.component.html',
  styleUrls: ['./menu-intermedio.component.css']
})
export class MenuIntermedioComponent {
  mostrarContenido: boolean =false;
  mostrarContenidoFinanzas: boolean =false;
  mostrarContenidoContabilidad: boolean =false;
  estaActivo: boolean=false;
  estaActivoC: boolean=false;
  estaActivoF: boolean=false;

  btnActivo(){
    if(!this.mostrarContenido){
      this.mostrarContenidoContabilidad = false;
      this.mostrarContenidoFinanzas = false;
    }
  }

  btnActivoC(){
    if(!this.mostrarContenidoContabilidad) {
      this.mostrarContenidoFinanzas = false;
      this.mostrarContenido = false;
    }
  }
  btnActivoF(){
    if(!this.mostrarContenidoFinanzas) {
      this.mostrarContenido = false;
      this.mostrarContenidoContabilidad = false;
    }
  }
}
