import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
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
export class ContabilidadComponent implements OnInit {
  panelOpenState = false;
  form: FormGroup;

  creditdoFiscal: boolean = false;
  consumidorFinal: boolean = true;
  public mostrar: number = 1;
  selectedTabIndex = 0;
  
  empresas: { [key: string]: { nombre: string; nombreComercial: string; actividad: string; ncr: string; nit: string; correo: string; departamento: string; telefono: string; municipio: string; complemento: string; } } = {
    'DF PROYECTOS S.A. DE C.V.': {
      nombre: 'Nombre DF Proyectos',
      nombreComercial: 'Comercial DF Proyectos',
      actividad: 'Construcción',
      ncr: '12345',
      nit: '123-456-789',
      correo: 'dfproyectos@example.com',
      departamento: 'San Salvador',
      telefono: '1234-5678',
      municipio: 'San Salvador',
      complemento: 'Complemento DF Proyectos'
    },
    'DG REMODELACIONES, S.A. DE C.V.': {
      nombre: 'Nombre DG Remodelaciones',
      nombreComercial: 'Comercial DG Remodelaciones',
      actividad: 'Remodelación',
      ncr: '67890',
      nit: '987-654-321',
      correo: 'dgremodelaciones@example.com',
      departamento: 'La Libertad',
      telefono: '8765-4321',
      municipio: 'Santa Tecla',
      complemento: 'Complemento DG Remodelaciones'
    },
    'DIARPA, S.A DE C.V': {
      nombre: 'Nombre DIARPA',
      nombreComercial: 'Comercial DIARPA',
      actividad: 'Arquitectura',
      ncr: '54321',
      nit: '321-654-987',
      correo: 'diarpa@example.com',
      departamento: 'Santa Ana',
      telefono: '4321-8765',
      municipio: 'Santa Ana',
      complemento: 'Complemento DIARPA'
    }
  };

  constructor(public service: DataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      comprador: [''],
      nombre: [{ value: '', disabled: true }],
      nombreComercial: [{ value: '', disabled: true }],
      actividad: [{ value: '', disabled: true }],
      ncr: [{ value: '', disabled: true }],
      nit: [{ value: '', disabled: true }],
      correo: [{ value: '', disabled: true }],
      departamento: [{ value: '', disabled: true }],
      telefono: [{ value: '', disabled: true }],
      municipio: [{ value: '', disabled: true }],
      complemento: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {
    this.form.get('comprador')?.valueChanges.subscribe(selectedEmpresa => {
      const empresa = this.empresas[selectedEmpresa as keyof typeof this.empresas];
      if (empresa) {
        this.form.patchValue({
          nombre: empresa.nombre,
          nombreComercial: empresa.nombreComercial,
          actividad: empresa.actividad,
          ncr: empresa.ncr,
          nit: empresa.nit,
          correo: empresa.correo,
          departamento: empresa.departamento,
          telefono: empresa.telefono,
          municipio: empresa.municipio,
          complemento: empresa.complemento
        });
      }
    });
  }

  comprobarenvio() {
    console.log(this.mostrar);
    let content2 = document.getElementById(this.mostrar.toString());
    console.log(content2);
  }

  realizarEnvio() {
    this.mostrar = 3;

    Swal.fire({
      title: '¿Estas seguro de terminar el proceso?',
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
    });
  }

  send() {
    console.log(this.form.value);
  }

  abrirCreditoFiscal() {
    if (!this.creditdoFiscal) {
      this.creditdoFiscal = true;
      this.consumidorFinal = false;
    }
  }

  abrirconsumidorFinal() {
    if (!this.consumidorFinal) {
      this.creditdoFiscal = false;
      this.consumidorFinal = true;
    }
  }

  tabChanged(index: number) {
    this.selectedTabIndex = index;
  }

  isTabActive(index: number) {
    return this.selectedTabIndex === index ? 'active' : 'inactive';
  }
}
