import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

interface RegistroUsuario {
  nombre: string;
  apellidos: string;
  codUsuario: string;
  idTipoUsuario: number;
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
  seleccionado: any = null;
  lista: RegistroUsuario[] = [];
  usuarioData: any = null;
  public mostrar: number = 1;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      codUsuario: ['', Validators.required],
      idTipoUsuario: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerUsuarios();
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
      }
    }
    `;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({
      next: result => {
        this.usuarioData = result.data.obtenerUsuario;
        this.lista = this.usuarioData.map((item: any) => ({
          nombre: item.nombre,
          apellidos: item.apellidos,
          codUsuario: item.codUsuario,
          idTipoUsuario: item.idTipoUsuario
        }));
        console.log(JSON.stringify(this.lista));  
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
        Swal.fire(
          'Enviado',
          'El usuario se registró correctamente',
          'success'
        )
      }
    });
  }
}
