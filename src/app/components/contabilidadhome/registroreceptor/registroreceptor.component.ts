import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  correo: string;
  nombre: string;
  apellido: string;
  dui: string;
}
@Component({
  selector: 'app-registros',
  templateUrl: './registroreceptor.component.html',
  styleUrls: ['./registroreceptor.component.css']
})
export class RegistroReceptorComponent implements OnInit {
  public formulario: FormGroup;
  public opcion: number = 1;
  editable = false;
  seleccionado: any = null;
  lista: RegistroUsuario[] = [];
  usuarioData: any = null;
  public mostrar: number = 1;
  public mostrarPassword: boolean = false;

  displayedColumns: string[] = ['correo', 'nombre', 'apellido', 'dui'];
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      codUsuario: ['', Validators.required],
      password: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  obtenerUsuarios(): void {
    const token = this.getCookie('token'); 
    //const token = localStorage.getItem('token');
    console.log(token); // Asumiendo que tienes una función getCookie
    const query = `
    query ObtenerCliente {
      obtenerCliente {
        nombreCliente
        nrc
        nitDui
        correoElectronico
      }
    }
    `;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({
      next: result => {
        const usuarioData = result.data.obtenerCliente;
        console.log(usuarioData);
        const lista = usuarioData.map((item: any) => ({
          correo: item.nombreCliente,
          nombre: item.nitDui,
          apellido: item.nrc, 
          dui: item.correoElectronico 
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
}



