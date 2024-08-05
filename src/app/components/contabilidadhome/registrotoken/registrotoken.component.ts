import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroToken } from 'src/app/pages/interfaces/registrotoken';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registros',
  templateUrl: './registrotoken.component.html',
  styleUrls: ['./registrotoken.component.css']
})
export class RegistroTokenComponent implements OnInit {
  public formulario: FormGroup;
  public opcion: number = 1;
  editable = false;
  seleccionado: any = null;
  lista: RegistroToken[] = [];
  tokenData: any = null;  

  constructor(private fb: FormBuilder, private http: HttpClient) {
    let usuarioInicial: RegistroToken = { id: 0, tipo: "natural", token: "", creacion: "" }
    this.formulario = this.convertirAFormulario(usuarioInicial);
  }
  ngOnInit() {
    this.obtenerToken();
  }
  convertirAFormulario(usuario: RegistroToken) {
    const fb = this.fb;
    return fb.group({
      id: fb.control(usuario.id, []),
      tipo: fb.control(usuario.tipo, Validators.required),
      token: fb.control(usuario.token, Validators.required),
      creacion: fb.control(usuario.creacion, []),
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
  obtenerToken(): void {
    const token = this.getCookie('token'); // Asumiendo que tienes una función getCookie
    const query = `
    query Query {
      obtenerRegistroToken {
        id
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

    console.log(headers);
  
    this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({



      next: result => {
        this.tokenData = result.data.obtenerRegistroToken;

        /* const query = `
          query ObtenerUsuario {
            obtenerUsuario {
              idTipoUsuario
              ipUsuario
              correo
            }
          }
        `;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
        this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({
          next: (response) => {
            const usuario = response.data.obtenerUsuario;
            const idTipoUsuario = usuario.idTipoUsuario;
            const ipUsuario = usuario.ipUsuario;
            const correo = usuario.correo;
        
            console.log('ID Tipo Usuario:', idTipoUsuario);
            console.log('IP Usuario:', ipUsuario);
            console.log('Correo:', correo);
        
            // Puedes utilizar las variables aquí según tus necesidades
          },
          error: (error) => {
            console.error('Error al obtener el usuario:', error);
          }
        }); */
        
        this.lista = this.tokenData.map((item: any) => ({
          id: item.id,
          tipo: "tipoNoDisponible",  
          token: item.tokenActual,
          creacion: item.fechaGeneracion
        }));  
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
}



