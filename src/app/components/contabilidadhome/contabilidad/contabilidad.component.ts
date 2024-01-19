import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('0.5s')
      ]),
    ]),
  ]
  
})
export class ContabilidadComponent implements OnInit{
  form: FormGroup;

  creditdoFiscal: boolean = false;
  consumidorFinal: boolean = true;
  public mostrar: number = 1;
  selectedTabIndex = 0;
  

  constructor(public service:DataService, private fb: FormBuilder) {
    //console.log('isOpen' + service.isOpen);
    this.form = this.fb.group({})
  }
  ngOnInit(){
   
  }
  comprobarenvio(){
    console.log(this.mostrar);
    let content2 = document.getElementById(this.mostrar.toString());
    console.log(content2);

    // let a = document.getElementById('envio');
    // this.mostrar === 3 ? a?.click(): '';
  }
  realizarEnvio(){
    this.mostrar = 3

    Swal.fire({
      title: 'Estas seguro de enviarlo?',
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
          'El DTE se envio correctamente',
          'success'
        )
      }
    })
  }
  send() {
    console.log(this.form.value)
  }
  abrirCreditoFiscal() {
    if(!this.creditdoFiscal) {
      this.creditdoFiscal = true
      this.consumidorFinal = false
    }
  }
  abrirconsumidorFinal() {
    if(!this.consumidorFinal) {
      this.creditdoFiscal = false
      this.consumidorFinal = true
    }
  }
  tabChanged(index: number) {
    this.selectedTabIndex = index;
  }

  isTabActive(index: number) {
    return this.selectedTabIndex === index ? 'active' : 'inactive';
  }

}
