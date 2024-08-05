import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

interface RegistroUsuario {
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
  id: string;
  name: string;
  progress: string;
  color: string;
}

const ELEMENT_DATA: UserData[] = [
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  {id: '1', name: 'Hydrogen', progress: '100%', color: 'red'},
  // más datos aquí
];

@Component({
  selector: 'app-registros',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  public formulario: FormGroup;
  public opcion: number = 1;
  editable = false;
  seleccionado: any = null;
  lista: RegistroUsuario[] = [];
  usuarioData: any = null;
  public mostrar: number = 1;
  public mostrarPassword: boolean = false;

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
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
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerUsuarios();
    //this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerUsuarios(): void {
    const token = this.getCookie('token'); // Asumiendo que tienes una función getCookie
    const query = `
    query ObtenerUsuario {
      obtenerUsuario {
        nombre
        apellidos
        codUsuario
        idTipoUsuario
        correo
        dui
        nrc
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
        const lista = usuarioData.map((item: any) => ({
          id: item.correo,
          name: `${item.nombre} ${item.apellidos}`,
          progress: item.apellidos, 
          color: item.dui 
        }));
        this.dataSource.data = lista;
        console.log(JSON.stringify(this.dataSource.data));  
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
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
          correo
          clave
          nrc
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
        correo: this.formulario.get('correo')?.value,
        clave: this.formulario.get('password')?.value,
        nrc: this.formulario.get('nrc')?.value,
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
