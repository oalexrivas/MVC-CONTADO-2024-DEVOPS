import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

export interface RegistroUsuario {
  nombre: string;
  apellidos: string;
  codUsuario: string;
  idTipoUsuario: number;
  dui: string;
  nit: string;
  nrc: string;
  correo: string;
  password: string;
}

export interface UserData {
  correo: string;
  nombre: string;
  apellido: string;
  dui: string;
}

@Component({
  selector: 'app-registros',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  public formulario: FormGroup;
  public opcion: number = 1;
  editable = false;
  hide = true;
  seleccionado: any = null;
  lista: RegistroUsuario[] = [];
  listaUsuariosCompletos: any[] = [];
  usuarioData: any = null;
  public mostrar: number = 1;
  isEditMode: boolean = false;
  public mostrarPassword: boolean = false;

  displayedColumns: string[] = ['correo', 'nombre', 'apellido', 'dui'];
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      codUsuario: ['', Validators.required],
      idTipoUsuario: ['', Validators.required],
      dui: ['', Validators.required],
      nit: ['', Validators.required],
      nrc: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  obtenerUsuarios(): void {
    const token = this.getCookie('token'); 
    console.log(token); 
    const query = `
    query ObtenerUsuario {
      obtenerUsuario {
        id
        nombre
        apellidos
        codUsuario
        idTipoUsuario
        correo
        dui
        nrc
        nit
        clave
      }
    }
    `;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({
      next: result => {
        const usuarioData = result.data.obtenerUsuario;
        console.log(usuarioData);
        this.listaUsuariosCompletos = usuarioData;
        const lista = usuarioData.map((item: any) => ({
          correo: item.correo,
          nombre: `${item.nombre} ${item.apellidos}`,
          apellido: item.apellidos, 
          dui: item.dui 
        }));
        this.dataSource.data = lista;
        console.log(JSON.stringify(this.dataSource.data));  
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
  onRowClick(row: any): void {
    console.log('Fila seleccionada:', row);
    console.log('Lista de usuarios completos:', this.listaUsuariosCompletos);
    // Buscar el usuario completo en la listaUsuariosCompletos usando un identificador único (ej: correo)
    const usuarioSeleccionado = this.listaUsuariosCompletos.find(user => user.correo === row.correo);
    
    if (usuarioSeleccionado) {
      // Verifica los datos del usuario seleccionado
      console.log('Usuario seleccionado:', usuarioSeleccionado);
  
      // Rellenar el formulario con los datos completos del usuario
      this.formulario.patchValue({
        nombre: usuarioSeleccionado.nombre,
        apellidos: usuarioSeleccionado.apellidos,
        codUsuario: usuarioSeleccionado.codUsuario,
        idTipoUsuario: usuarioSeleccionado.idTipoUsuario || '',  // Asegúrate de que el valor exista
        dui: usuarioSeleccionado.dui,
        nit: usuarioSeleccionado.nit,
        nrc: usuarioSeleccionado.nrc,
        correo: usuarioSeleccionado.correo,
        password: '',  // No se debe rellenar por seguridad
        confirmPassword: ''  // No se debe rellenar por seguridad
      });
      
      // Cambiar el estado a modo edición
      this.isEditMode = true;
    } else {
      console.error('Usuario no encontrado en la lista completa.');
    }
  }  
  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  limpiarFormulario() {
    this.formulario.reset({
      nombre: '',
      apellidos: '',
      codUsuario: '',
      idTipoUsuario: '',
      dui: '',
      nit: '',
      nrc: '',
      correo: '',
      password: '',
      confirmPassword: ''
    });
  }
  backEdit(): void {
    this.isEditMode = false;
    this.limpiarFormulario();
  }
  guardarUsuario(): void{
    const token = this.getCookie('token');
    console.log(token);
    const query = `
      mutation CrearUsuario($parametros: usuarioInput) {
        crearUsuario(parametros: $parametros) {
          nombre
          apellidos
          codUsuario
          idTipoUsuario
          dui
          nit
          nrc
          correo
          clave
        }
      }
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const variables = {
      parametros: {
        nombre: this.formulario.get('nombre')?.value,
        apellidos: this.formulario.get('apellidos')?.value,
        codUsuario: this.formulario.get('codUsuario')?.value,
        idTipoUsuario: Number(this.formulario.get('idTipoUsuario')?.value),
        dui: this.formulario.get('dui')?.value,
        nit: this.formulario.get('nit')?.value,
        nrc: this.formulario.get('nrc')?.value,
        correo: this.formulario.get('correo')?.value,
        clave: this.formulario.get('password')?.value, 
      },
    };
    console.log(variables);
    this.http.post<any>('http://localhost:4000/', { query,variables },{headers}).subscribe(result => {
      console.log("token guardado")
    });
  }
  realizarEnvio() {
    this.mostrar = 3;
    Swal.fire({
      title: '¿Estás seguro de registrar el usuario?',
      text: "¡No podrás revertir este proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarUsuario();
        this.limpiarFormulario();
        Swal.fire(
          'Enviado',
          'El usuario se registró correctamente',
          'success'
        )
        this.router.navigate(['/contabilidad/registrousuario']);
      }
    });
  }
}
