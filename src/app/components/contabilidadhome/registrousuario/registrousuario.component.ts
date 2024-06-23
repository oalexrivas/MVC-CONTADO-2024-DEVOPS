import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroToken } from 'src/app/pages/interfaces/registrotoken';
import { HttpClient } from '@angular/common/http';

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
  
  // Inicialmente vacío, luego se llenará con los datos obtenidos de la consulta
  lista: RegistroToken[] = [];
  
  tokenData: any = null;  // Variable para almacenar los datos del token

  constructor(private fb: FormBuilder, private http: HttpClient) {
    let usuarioInicial: RegistroToken = { id: 0, tipo: "natural", token: "", creacion: "" }
    this.formulario = this.convertirAFormulario(usuarioInicial);
  }
  
  ngOnInit() {
    // Llamar a obtenerToken cuando el componente se inicializa
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
  
  generarTokenAleatorio(): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const tokenLength = 20; // 20 characters divided into groups of 5
    let token = '';
  
    for (let i = 0; i < tokenLength; i++) {
      if (i > 0 && i % 5 === 0) {
        token += '-';
      }
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
  
    // Actualiza el valor del input con el ID 'tokenInput'
    const tokenInput = document.getElementById('tokenInput') as HTMLInputElement;
    if (tokenInput) {
      tokenInput.value = token;
    }
  }
  
  obtenerDepartamentos(): void {
    const query = `
      query {
        obtenerDepartamento {
          id
          codigoDepartamento
          nombreDepartamento
        }
      }
    `;

    this.http.post<any>('http://localhost:4000/', { query }).subscribe(result => {
      console.log(result);
    });
  }
  
  obtenerMunicipio(): void {
    const query = `
    query Query {
      obtenerMunicipio {
        id
        codigoMunicipio
        nombreMunicipio
        idDepartamento
      }
    }
    `;

    this.http.post<any>('http://localhost:4000/', { query }).subscribe(result => {
      console.log(result);
    });
  }
  
  obtenerToken(): void {
    const query = `
    query Query {
      obtenerUsuario {
        codUsuario
        clave
        nombre
        apellidos
      }
    }
    `;
    this.http.post<any>('http://localhost:4000/', { query }).subscribe({
      next: result => {
        this.tokenData = result.data.obtenerUsuario;  
        this.lista = this.tokenData.map((item: any) => ({
          id: item.nombre+" "+item.apellidos,  
          token: item.codUsuario,
          creacion: item.clave
        }));
        console.log(JSON.stringify(this.lista));  
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
}



