import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public mostrarPassword: boolean = false;
  usuarioData: any = null;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    public dialog: MatDialog,
    public dataService: DataService, 
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.dataService.cambiarTema(this.dataService.getPreferredTheme());
    this.dataService.cambiarEscalaGrises(true);
    //this.obtenerUsuario();
  }
  obtenerDatos(): void {
    const datos = this.loginForm.value;
  }
  obtenerUsuario(): void {
    const query = `
      query Query {
        obtenerUsuario {
          codUsuario
          clave
        }
      }
    `;
    this.http.post<any>('http://localhost:4000/', { query }).subscribe({
      next: result => {
        this.usuarioData = result.data.obtenerUsuario;
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
  generarToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const datos = this.loginForm.value;
      const query = `
        mutation IniciarSesion($parametros: usuarioLoginInput) {
          iniciarSesion(parametros: $parametros) {
            token
          }
        }
      `;
      const variables = {
        parametros: {
          usuario: datos.usuario,
          clave: datos.password
        }
      };
      this.http.post<any>('http://localhost:4000/', { query, variables }).subscribe(
        result => {
          if (result.data && result.data.iniciarSesion && result.data.iniciarSesion.token) {
            const token = result.data.iniciarSesion.token;
            console.log(token);
            // Guarda el token en localStorage
            localStorage.setItem('token', token);
            resolve(true);
          } else {
            alert('Usuario o Contraseña incorrecto');
            resolve(false);
          }
        },
        error => {
          console.error('Error en la petición', error);
          alert('Usuario o Contraseña incorrecto');
          resolve(false);
        }
      );
    });
  }  
  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  obtenerCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  guardarToken(): void{
    const token = this.obtenerCookie('token');
    console.log(token);
    const query = `
      mutation CrearRegistroToken($parametros: registroTokenInput) {
        crearRegistroToken(parametros: $parametros) {
          idPersona
          tokenActual
          tokenAnterior
          fechaGeneracion
        }
      }
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const fechaGeneracion = new Date().toISOString();
    const variables = {
      parametros: {
        idPersona: 1,
        tokenActual: `${token}`,
        tokenAnterior: `${token}`,
        fechaGeneracion: `${fechaGeneracion}`,
      }
    };
    console.log(headers);
    this.http.post<any>('http://localhost:4000/', { query,variables },{headers}).subscribe(result => {
      console.log("token guardado")
    });
  }
  validarUsuario(): void {
    this.generarToken().then(success => {
      if (success) {
        this.guardarToken();
        this.router.navigate(['contabilidad/documentodte/consumidorfinal']);
      }
    }); 
  }
  
}



