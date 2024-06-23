import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
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
    this.obtenerUsuario();
  }
  openDialog(){
    
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
        this.usuarioData = result.data.obtenerUsuario; // Almacenar como objeto
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
  validarUsuario(): void {
    const datos = this.loginForm.value;
    const usuarioEncontrado = this.usuarioData.find((user: any) => 
      user.codUsuario === datos.usuario && user.clave === datos.password
    );

    if (usuarioEncontrado) {
      this.router.navigate(['contabilidad/documentodte/consumidorfinal']);
    } else {
      alert('Datos Incorrectos');
    }
  }
}



