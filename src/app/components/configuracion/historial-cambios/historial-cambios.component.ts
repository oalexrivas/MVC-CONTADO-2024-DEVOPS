import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-cambios',
  templateUrl: './historial-cambios.component.html',
  styleUrls: ['./historial-cambios.component.css']
})
export class HistorialCambiosComponent implements OnInit {

  historialLista: any[] = [];
  historialSeleccionado: string = "";
  historial: any[] = [];

  constructor() { }

  ngOnInit() {
    // Esta lista la deba mandar Backend para llenar el dropdown de opciones a cargar en la tabla
    this.historialLista = ['tabla1', 'tabla2'];
  }

  setHistorialSeleccionado(seleccion:string) {
    this.historialSeleccionado = seleccion;
  }

  buscarHistorial() {
    // Lógica para buscar el historial solicitado
    
    // Este if solo sirve como razón de prueba y simulación de data
    if (this.historialSeleccionado == 'tabla1') {
      this.historial = [
        {columna1: 'cambio1', columna2: 'valor1', usuario: 'Pedro Hernandez', fecha: '1/12/2023', hora: '09:50 PM'},
        {columna1: 'cambio2', columna2: 'valor2', usuario: 'José Gómez', fecha: '9/12/2023', hora: '09:50 PM'},
      ];
    } else {
      this.historial = [
        {'col1': 1, 'usuario': 'Pedro Hernandez', 'fecha': '7/11/2023', 'hora': '09:57 AM'},
        {'col1': 2, 'usuario': 'Diana Mendoza', 'fecha': '12/12/2023', 'hora': '04:35 PM'},
        {'col1': 3, 'usuario': 'Pedro Hernandez', 'fecha': '15/12/2023', 'hora': '03:46 PM'},
      ];
    }
  }

  getArrayKeysFromObject(obj: any) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj);
  }
  getArrayValuesFromObject(obj: any) {
    return Object.values(obj);
  }
}