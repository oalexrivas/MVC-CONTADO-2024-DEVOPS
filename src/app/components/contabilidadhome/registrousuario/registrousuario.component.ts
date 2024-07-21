import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroToken } from 'src/app/pages/interfaces/registrotoken';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
  lista: RegistroToken[] = [];
  tokenData: any = null;
  public mostrar: number = 1;

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
  convertirAFormulario(usuario: RegistroToken) {
    const fb = this.fb;
    return fb.group({
      id: fb.control(usuario.id, []),
      tipo: fb.control(usuario.tipo, Validators.required),
      token: fb.control(usuario.token, Validators.required),
      creacion: fb.control(usuario.creacion, []),
    });
  }
  ingresarUsuario(): void {
    const query = `
      mutation CrearUsuario($parametros: usuarioInput) {
        crearUsuario(parametros: $parametros) {
          apellidos
          codUsuario
          correo
          clave
          nombre
        }
      }
    `;
    const variables = {
      parametros: {
        nombre: this.formulario.get('nombre')?.value,
        apellidos: this.formulario.get('apellido')?.value,
        correo: this.formulario.get('correo')?.value,
        clave: this.formulario.get('password')?.value,
        nrc: "",
        codUsuario: this.formulario.get('codUsuario')?.value
      }
    };
    this.http.post<any>('http://localhost:4000/', { query, variables }).subscribe(result => {
      alert("Usuario Creado");
    }); 

  } 
  realizarEnvio() {
    this.mostrar = 3;

    Swal.fire({
      title: '¿Estas seguro de registrar el usuario?',
      text: "No podras revertir este proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviado',
          'El usuario se registro correctamente',
          'success'
        )
      }
    });
  }
}



