import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css'],
})
export class ContabilidadComponent implements OnInit {
  @ViewChild('finalizarDialog') finalizarDialog!: TemplateRef<any>;

  panelOpenState = false;
  form: FormGroup;
  emisorForm: FormGroup;

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

  displayedColumns: string[] = ['cantidad', 'descripcion', 'precioUnitario', 'ventasNoSujetas', 'ventasExentas', 'ventasAfectas'];
productos: any;

  constructor(
    public service: DataService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
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

    this.emisorForm = this.fb.group({
      nombre: ['', Validators.required],
      nombreComercial: ['', Validators.required],
      actividad: ['', Validators.required],
      ncr: ['', Validators.required],
      nit: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      complemento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      correo: ['', [Validators.required, Validators.email]]
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

  openDialog(): void {
    const dialogRef = this.dialog.open(this.finalizarDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.realizarEnvio(); // Llama a la función para finalizar el proceso
      }
    });
  }

  realizarEnvio() {
    this.mostrar = 3;

    Swal.fire({
      title: '¿Estás seguro de terminar el proceso?',
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
          'El DTE se envió correctamente',
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

  goToSpecificTab(tabGroup: MatTabGroup, tabIndex: number) {
    if (this.isEmisorFormValid()) {
      if (tabIndex < tabGroup._tabs.length) {
        tabGroup.selectedIndex = tabIndex;
      } else {
        console.warn('Índice de pestaña fuera de rango');
      }
    } else {
      alert('Por favor complete todos los campos requeridos del Emisor.');
    }
  }

  isEmisorFormValid(): boolean {
    return this.form.valid;
  }
  

  isReceptorFormValid(): boolean {
    return this.form.valid;
  } 

 
}
