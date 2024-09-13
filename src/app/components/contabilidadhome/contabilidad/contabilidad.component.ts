import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatTabGroup } from '@angular/material/tabs';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css'],
})
export class ContabilidadComponent implements OnInit {
  @ViewChild('finalizarDialog') finalizarDialog!: TemplateRef<any>;
  emisorDatos: any;
  receptorDatos: any;

  panelOpenState = false;
  form: FormGroup;
  emisorForm: FormGroup;
  receptorForm: FormGroup;

  creditdoFiscal: boolean = false;
  consumidorFinal: boolean = true;
  public mostrar: number = 1;
  selectedTabIndex = 0;

  // Empresas registradas
  empresas: { [key: string]: { nombre: string; nombreComercial: string; actividad: string; nrc: string; nit: string; correo: string; departamento: string; telefono: string; municipio: string; complemento: string; } } = {
    'DF PROYECTOS S.A. DE C.V.': {
      nombre: 'Nombre DF Proyectos',
      nombreComercial: 'Comercial DF Proyectos',
      actividad: 'Construcción',
      nrc: '12345',
      nit: '123456789',
      correo: 'dfproyectos@example.com',
      departamento: 'San Salvador',
      telefono: '12345678',
      municipio: 'San Salvador',
      complemento: 'Complemento DF Proyectos'
    },
    'DG REMODELACIONES, S.A. DE C.V.': {
      nombre: 'Nombre DG Remodelaciones',
      nombreComercial: 'Comercial DG Remodelaciones',
      actividad: 'Remodelación',
      nrc: '67890',
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
      nrc: '54321',
      nit: '321-654-987',
      correo: 'diarpa@example.com',
      departamento: 'Santa Ana',
      telefono: '4321-8765',
      municipio: 'Santa Ana',
      complemento: 'Complemento DIARPA'
    }
  };


  personas: { [key: string]: { nombre: string; tipoDocumento: string; numeroDocumento: string; nrc: string; departamento: string; municipio: string; complemento: string; telefono: string; actividad: string; correo: string; } } = {
    'Carlos Martínez': {
      nombre: 'Carlos Martínez',
      tipoDocumento: 'DUI',
      numeroDocumento: '03123456-7',
      nrc: '234567-8',
      departamento: 'San Salvador',
      municipio: 'Mejicanos',
      complemento: 'Colonia Escalón',
      telefono: '7777-8888',
      actividad: 'Ingeniero Civil',
      correo: 'carlos.martinez@example.com'
    },
    'Laura Pérez': {
      nombre: 'Laura Pérez',
      tipoDocumento: 'DUI',
      numeroDocumento: '01234567-8',
      nrc: '1234567-8',
      departamento: 'La Libertad',
      municipio: 'Santa Tecla',
      complemento: 'Colonia Jardines del Volcán',
      telefono: '6666-5555',
      actividad: 'Arquitecta',
      correo: 'laura.perez@example.com'
    },
    'Mario López': {
      nombre: 'Mario López',
      tipoDocumento: 'DUI',
      numeroDocumento: '09876543-2',
      nrc: '3456789-0',
      departamento: 'Santa Ana',
      municipio: 'Santa Ana',
      complemento: 'Colonia El Carmen',
      telefono: '8888-9999',
      actividad: 'Contador',
      correo: 'mario.lopez@example.com'
    }
  };
  
  
  // Precios de los productos
  precios: { [key: string]: number } = {
    'Tornillos': 0.5,
    'Clavos': 0.1,
    'Llaves inglesas': 5.0,
    'Destornilladores': 3.0,
    'Taladros': 50.0,
  };

  // Lista de productos
  productos: { cantidad: number; descripcion: string; precioUnitario: number; total: number; iva: number; ventasAfectas: number }[] = [];

  constructor(
    public service: DataService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    // Formulario para seleccionar la empresa
    this.form = this.fb.group({
      comprador: [''],
      nombre: [{ value: '', disabled: true }],
      nombreComercial: [{ value: '', disabled: true }],
      actividad: [{ value: '', disabled: true }],
      nrc: [{ value: '', disabled: true }],
      nit: [{ value: '', disabled: true }],
      correo: [{ value: '', disabled: true }],
      departamento: [{ value: '', disabled: true }],
      telefono: [{ value: '', disabled: true }],
      municipio: [{ value: '', disabled: true }],
      complemento: [{ value: '', disabled: true }]
    });

    // Formulario del emisor
    this.emisorForm = this.fb.group({
      nombre: ['', Validators.required],
      nombreComercial: ['', Validators.required],
      actividad: ['', Validators.required],
      nrc: ['', Validators.required],
      nit: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      complemento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      correo: ['', [Validators.required, Validators.email]]
    });

    // Formulario del receptor
    this.receptorForm = this.fb.group({
      nombre: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      nrc: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      complemento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      actividad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });

    // Inicializar la lista de productos
    this.productos = [
      { cantidad: 0, descripcion: 'Tornillos', precioUnitario: this.precios['Tornillos'], total: 0, iva: 0, ventasAfectas: 0 },
      { cantidad: 0, descripcion: 'Clavos', precioUnitario: this.precios['Clavos'], total: 0, iva: 0, ventasAfectas: 0 },
      { cantidad: 0, descripcion: 'Llaves inglesas', precioUnitario: this.precios['Llaves inglesas'], total: 0, iva: 0, ventasAfectas: 0 },
      { cantidad: 0, descripcion: 'Destornilladores', precioUnitario: this.precios['Destornilladores'], total: 0, iva: 0, ventasAfectas: 0 },
      { cantidad: 0, descripcion: 'Taladros', precioUnitario: this.precios['Taladros'], total: 0, iva: 0, ventasAfectas: 0 },
    ];
  }

  ngOnInit() {
    this.mostrarValorNeto();
    this.llenarDatosReceptorAutomaticos();
    
    // Escuchamos los cambios en el valor seleccionado del comprador
    this.form.get('comprador')?.valueChanges.subscribe(selectedComprador => {
      console.log("Comprador seleccionado: ", selectedComprador);  // Depuración
  
      // Verificamos si el comprador está en empresas
      const empresa = this.empresas[selectedComprador as keyof typeof this.empresas];
      // Verificamos si el comprador está en personas
      const persona = this.personas[selectedComprador as keyof typeof this.personas];
  
     // console.log("Datos de la empresa seleccionada: ", empresa);  // Depuración de empresa
      console.log("Datos de la persona seleccionada: ", persona);  // Depuración de persona
  
      if (empresa) {
        // Si es una empresa, llenamos el formulario con los datos de la empresa
        this.form.patchValue({
          nombre: empresa.nombre,
          nombreComercial: empresa.nombreComercial,
          actividad: empresa.actividad,
          nrc: empresa.nrc,
          nit: empresa.nit,
          correo: empresa.correo,
          departamento: empresa.departamento,
          telefono: empresa.telefono,
          municipio: empresa.municipio,
          complemento: empresa.complemento
        });
      } else if (persona) {
        // Si es una persona, llenamos el formulario con los datos de la persona
        this.form.patchValue({
          nombre: persona.nombre,
          actividad: persona.actividad,
          nrc: persona.nrc,
          nit: persona.numeroDocumento, // Usamos numeroDocumento como NIT para personas
          correo: persona.correo,
          departamento: persona.departamento,
          telefono: persona.telefono,
          municipio: persona.municipio,
          complemento: persona.complemento
        });
      } else {
        // Si no es ni una empresa ni una persona, limpiamos el formulario
        console.log("No se encontró ni empresa ni persona.");
        this.form.reset();
      }
    });
  }
  
  logoUrl: string | ArrayBuffer | null = null;

  // Método para disparar el input de archivo
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onLogoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Se asegura de que logoUrl no reciba undefined
        this.logoUrl = e.target?.result ?? null;  // Si es undefined, se asigna null
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  // Obtener las claves del objeto precios
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Actualizar precio unitario al seleccionar un producto
  actualizarPrecioUnitario(index: number) {
    const producto = this.productos[index];
    producto.precioUnitario = this.precios[producto.descripcion] || 0;
    this.actualizarTotalProducto(index);
  }

  // Actualizar total, IVA y ventas afectas
  actualizarTotalProducto(index: number) {
    const producto = this.productos[index];
    producto.total = producto.cantidad * producto.precioUnitario;
    producto.iva = this.calcularIVA(producto.total);
    producto.ventasAfectas = producto.total + producto.iva; 
  }



  // Calcular el total general de ventas afectas
  calcularTotalVentasAfectas(): number {
    return this.productos.reduce((acc, producto) => acc + producto.ventasAfectas, 0);
  }


//Comprobacion #1
// Calcular IVA ( tasa del 13%)
calcularIVA(monto: number): number {
  const iva = 0.13;
  return monto * iva;
}

//Comprobacion #2
// Calcular el total general del IVA
calcularTotalIVA(): number {
  return this.productos.reduce((acc, producto) => acc + this.calcularIVA(producto.total), 0);
}
//Comprobacion #3
// Función para calcular el valor neto a partir del valor total
calcularValorNeto(valorTotal: number): number {
  return valorTotal / 1.13;
}
mostrarValorNeto() {
  const totalIVA = this.calcularTotalIVA();
  const valorNeto = this.calcularValorNeto(totalIVA);
  console.log('Total IVA:', totalIVA);
  console.log('Valor Neto:', valorNeto);
}

  // Agregar una nueva fila de producto
  agregarProducto() {
    this.productos.push({ cantidad: 0, descripcion: '', precioUnitario: 0, total: 0, iva: 0, ventasAfectas: 0 });
  }

  // Eliminar una fila de producto
  eliminarProducto(index: number) {
    if (this.productos.length > 1) {
      this.productos.splice(index, 1);
    }
  }
  
  llenarDatosReceptorAutomaticos(): void {
    // Simulación de obtener datos de un servicio para el receptor
    const datosReceptor = {
      nombre: 'Juan Pérez',
      tipoDocumento: '13',
      numeroDocumento: '12345678-9',
      nrc: '1234567',
      departamento: 'San Salvador',
      municipio: 'San Salvador',
      complemento: 'Colonia Escalón',
      telefono: '22223333',
      actividad: 'Comerciante',
      correo: 'juan.perez@example.com'
    };

    this.receptorForm.patchValue(datosReceptor);
  }
  


  preciosUnitarios: { [key: string]: number } = {
    'Tornillos': 0.1,
    'Clavos': 0.05,
    'Llaves inglesas': 5.0,
    'Destornilladores': 3.0,
    'Taladros': 50.0
  };
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
    // Guarda los datos antes de cambiar de pestaña
    if (tabIndex === 2) { // Índice de la pestaña de descripción
   //  this.guardarDatosEmisor();
     this.emisorDatos = this.form.getRawValue();
     //console.log(this.emisorDatos);
          
        this.receptorDatos = this.receptorForm.value;
    }

    if (tabIndex < tabGroup._tabs.length) {
      tabGroup.selectedIndex = tabIndex;
    } else {
      console.warn('Índice de pestaña fuera de rango');
    }
  }


  goToSpecificStep2(stepper: MatStepper, stepIndex: number) {
    // Guarda los datos antes de cambiar de paso
    if (stepIndex === 2) { // Índice del paso de descripción
      this.emisorDatos = this.form.getRawValue();
      this.receptorDatos = this.receptorForm.value;
    }
  
    if (stepIndex < stepper.steps.length) {
      stepper.selectedIndex = stepIndex;
    } else {
      console.warn('Índice de paso fuera de rango');
    }
  }
  

  isEmisorFormValid(): boolean {
    return this.emisorForm.valid;
  }

  isReceptorFormValid(): boolean {
    return this.receptorForm.valid;
  }


  
}
