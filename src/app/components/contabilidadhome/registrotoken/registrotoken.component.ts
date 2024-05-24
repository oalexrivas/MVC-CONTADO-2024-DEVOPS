import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroToken } from 'src/app/pages/interfaces/registrotoken';

@Component({
  selector: 'app-registros',
  templateUrl: './registrotoken.component.html',
  styleUrls: ['./registrotoken.component.css']
})
export class RegistroTokenComponent implements OnInit {

  public formulario: FormGroup;
  public opcion: number = 1;

  editable = false;
  listaBase: RegistroToken[] = [
    { id: 1, tipo: "natural", token: "ZX9K7W5Q-P8JL3N2F-R4T6V1MD-B2HG8Y4S", creacion: "23-05-2024" },
    { id: 2, tipo: "natural", token: "QW8L6X3T-M1RK7P9F-B2T5J8NL-Y4H6D3V2", creacion: "23-05-2024" },
    { id: 3, tipo: "sas", token: "PL7K9X2M-T8HJ3W5S-R1L4N6DF-Y9G2V8Q3", creacion: "23-05-2024" },
    { id: 4, tipo: "donante", token: "MN4T8J5K-R7P3W2Q1-B9H6L8DF-Y2K1V7T5", creacion: "23-05-2024" }
  ];
  lista: RegistroToken[] = [];
  seleccionado: any = null;

  constructor(private fb: FormBuilder) {
    let usuarioInicial: RegistroToken = { id: 0, tipo: "natural", token: "", creacion: "" }
    this.formulario = this.convertirAFormulario(usuarioInicial);
  }
  ngOnInit() {
    // Asignar la listaBase directamente a la lista
    this.lista = [...this.listaBase];
  }
  convertirAFormulario(usuario: RegistroToken) {
    const fb = this.fb;
    return fb.group<RegistroToken>({
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
  

}

