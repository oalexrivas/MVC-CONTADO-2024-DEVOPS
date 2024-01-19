import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  /**
   * 1 - Vista normal tabla
   * 2 - Creando  usuario
   * 3 - Editando usuario
   * 4 - Detalle  usuario
   * 5 - Eliminar usuario
   */
  opcion = 1;
  editable = false;
  lista: Usuario[] = [];
  seleccionado: any = null;

  public mostrarP1: boolean = false;
  public mostrarP2: boolean = false;

  constructor() { }

  ngOnInit() {
    // Asignación de usuarios de prueba
    this.lista = [
      { id: 1, nombre: "Mark", apellido: "Otto", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'mark.otto@gmail.com', telefono: '0000-0000', pais: '1', departamento: '1', municipio: '1', complemento: '', credencialCvcp: '0000', periodoInicio: '2023-12-01', periodoFin: '2023-12-31' },
      { id: 2, nombre: "Jacob", apellido: "Thornton", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'mark.otto@gmail.com', telefono: '0000-0000', pais: '1', departamento: '1', municipio: '1', complemento: '', credencialCvcp: '0000', periodoInicio: '2023-12-01', periodoFin: '2023-12-31' },
      { id: 3, nombre: "John", apellido: "Doe", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'mark.otto@gmail.com', telefono: '0000-0000', pais: '1', departamento: '1', municipio: '1', complemento: '', credencialCvcp: '0000', periodoInicio: '2023-12-01', periodoFin: '2023-12-31' },
      { id: 3, nombre: "John", apellido: "Doe", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'mark.otto@gmail.com', telefono: '0000-0000', pais: '1', departamento: '1', municipio: '1', complemento: '', credencialCvcp: '0000', periodoInicio: '2023-12-01', periodoFin: '2023-12-31' }
    ];
  }

  operacion(usuarioId: number, opc: number) {
    if (opc == 1) {
      this.opcion = opc;
      this.seleccionado = null;
    } else {
      this.opcion = opc;
      this.seleccionado = this.lista[usuarioId-1];
      this.editable = !!(opc == 2 || opc == 3);
    }
    console.log(this.editable);
  }

  guardar() {
    if (this.opcion == 2) {
      // Toda la lógica de GUARDADO de NUEVO Usuario
      console.log('guardando nuevo usuario');
    } else if (this.opcion == 3) {
      // Toda la lógica de ACTUALIZACION usuario
      console.log('actualizando usuario existente');
    }
    this.operacion(0, 1);
  }

  seleccionar(usuarioId: number) {
    this.seleccionado = this.lista[usuarioId-1];
  }
  
  cambioContra() {
    // Lógica para cambio de contraseña usando this.selecceionado
  }

  borrar() {
    // Lógica para eliminación de usuario 'this.seleccionado'
  }

  esEditable() {
    return this.editable ? null:true;
  }
}
