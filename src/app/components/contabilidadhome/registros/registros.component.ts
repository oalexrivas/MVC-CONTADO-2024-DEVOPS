import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/pages/interfaces/registro';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  
  public formulario: FormGroup;
  public opcion: number = 1;
  
  filtroTipo: string = 'natural';

  editable = false;
  listaBase: Registro[] = [
    { id: 1, tipo: "natural", nombre: "Tienda Mary", nombreComercial: "-", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '', correo: 'correo@gmail.com', telefono: '0000-0000', actividad: 'Comercio', pais: 'sv', departamento: '1', municipio: '1', complemento: '', campoNuevo: '' },
    { id: 2, tipo: "juridico", nombre: "Librería Josué", nombreComercial: "-", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'correo@gmail.com', telefono: '0000-0000', actividad: 'Comercio', pais: 'sv', departamento: '1', municipio: '1', complemento: '', campoNuevo: '' },
    { id: 3, tipo: "sas", nombre: "Super Julia", nombreComercial: "-", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'correo@gmail.com', telefono: '0000-0000', actividad: 'Comercio', pais: 'sv', departamento: '1', municipio: '1', complemento: '', campoNuevo: 'valor x' },
    { id: 4, tipo: "donante", nombre: "Panes Karen", nombreComercial: "-", dui: '00000000-0', nit: '0000-000000-000-0', nrc: '000', correo: 'correo@gmail.com', telefono: '0000-0000', actividad: 'Comercio', pais: 'sv', departamento: '1', municipio: '1', complemento: '', campoNuevo: '' }
  ];
  lista: Registro[] = [];
  seleccionado: any = null;
  
  constructor(private fb: FormBuilder) {
      let usuarioInicial: Registro = { id: 0, tipo: "natural", nombre: "", nombreComercial: "", dui: '', nit: '', nrc: '', correo: '', telefono: '', actividad: '', pais: '', departamento: '', municipio: '', complemento: '', campoNuevo: '' }
      this.formulario = this.convertirAFormulario(usuarioInicial);
  }

  ngOnInit() {
    this.onUserTypeChange();
    this.filtro();
  }

  onUserTypeChange() {
    const tipo = this.formulario.get('tipo')?.value;
//console.log(tipo)
    if (tipo === 'natural') {
      this.formulario.get('nrc')?.disable();
      this.formulario.get('campoNuevo')?.disable();
    } else if (tipo === 'juridico') {
      this.formulario.get('nrc')?.enable();
      this.formulario.get('campoNuevo')?.disable();
    } else if (tipo === 'donante') {
      this.formulario.get('campoNuevo')?.disable();
      console.log(tipo);
    } else if (tipo === 'sas') {
      this.formulario.get('campoNuevo')?.enable();
      console.log(tipo);
    } else if (tipo === 'proveedor') {
      this.formulario.get('campoNuevo')?.disable();
      console.log(tipo);
    }
  }

  filtro() {
    //console.log('Cargando tabla para tipo: ' + this.filtroTipo)
    this.lista = this.listaBase.filter((u) => u.tipo == this.filtroTipo);
  }

  operacion(usuarioId: number, opc: number) {
    if (opc == 1) {
      this.opcion = opc;
      this.seleccionado = null;
    } else {
      this.opcion = opc;
      this.seleccionado = this.lista[usuarioId-1];
      this.editable = !!(opc == 2 || opc == 3);
      this.formulario = this.convertirAFormulario(this.seleccionado);
      this.onUserTypeChange();
    }
    console.log("editable is " + this.editable);
  }

  convertirAFormulario(usuario: Registro) {
    const fb = this.fb;
    return fb.group<Registro>({
      id: fb.control(usuario.id, []),
      tipo: fb.control(usuario.tipo, Validators.required),
      nombre: fb.control(usuario.nombre, Validators.required),
      nombreComercial: fb.control(usuario.nombreComercial, []),
      dui: fb.control(usuario.dui, Validators.required),
      nit: fb.control(usuario.nit, Validators.required),
      nrc: fb.control(usuario.nrc, Validators.required),
      correo: fb.control(usuario.correo, [Validators.required, Validators.email]),
      telefono: fb.control(usuario.telefono, Validators.required),
      actividad: fb.control(usuario.actividad, Validators.required),
      pais: fb.control(usuario.pais, Validators.required),
      departamento: fb.control(usuario.departamento, Validators.required),
      municipio: fb.control(usuario.municipio, Validators.required),
      complemento: fb.control(usuario.complemento, Validators.required),
      campoNuevo: fb.control(usuario.campoNuevo, Validators.required)
  });
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

  borrar() {
    // Lógica para eliminación de usuario 'this.seleccionado'
  }

  seleccionar(usuarioId: number) {
    this.seleccionado = this.lista[usuarioId-1];
  }

}
