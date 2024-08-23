import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
import { Archivo } from '../interfaces/archivo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // Variables del buscador
  valorBusqueda: string = '';
  encontrados: Archivo[] = [];
  seleccionado: string = '';

  // Variables de navegación
  abrirHam = false;
  cerrar = true;
  menu = false;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  menuInicioShow: boolean = false;

  userRole: string = 'administrador';

  constructor(private router: Router, public dataService:DataService, public opcionMenuService:MenuOpcionService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    // Inicializar Modo de Color de sitio
    this.dataService.cambiarTema(this.dataService.getPreferredTheme());
    this.dataService.cambiarEscalaGrises(true);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  async buscar() {
    // Seteamos bandera de búsqueda para cambios visuales
    this.dataService.buscando = this.valorBusqueda != "";
    // Y reseteamos la opción seleccionada
    this.seleccionado = "";

    // Llamamos al método que busca al servidor
    if (this.dataService.buscando) {
      await this.dataService.buscarDatos(this.valorBusqueda);
      this.encontrados = this.dataService.arregloFiltrado;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  seleccionarBusqueda(seleccionado: string) {
    this.dataService.busquedaSeleccionado = seleccionado;
    console.log(seleccionado)
    this.seleccionado = seleccionado;
    let actual: any = this.encontrados.find(e => e.nombreDoc = this.seleccionado);
    this.encontrados = [actual];
  }
  resetBusqueda() {
    if (this.seleccionado != "") {
      // Si hay algo escrito en la barra de búsqueda solo se oculta el pdf-view
      this.seleccionado = "";
      this.buscar()
    } else {
      // Limpiamos toda la búsqueda y se cierra el paen de vista previa
      this.valorBusqueda = "";
      this.dataService.buscando = false;
      this.seleccionado = "";
    }
  }
  desplegarMenuHam() {
    this.dataService.toggle();
  }
  desplegarMenuSuperior() {
    this.dataService.toggleMenuSuperior();
  }  
  opcionMenu(opcion:string) {
    this.opcionMenuService.setDatos(opcion);
  }
  generarToken(): string {
    // Longitud del token deseada
    const longitudToken = 20;
  
    // Caracteres posibles para el token
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    let token = '';
    for (let i = 0; i < longitudToken; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      token += caracteres.charAt(indiceAleatorio);
    }
  
    return token;
  }
  ingresar(){
    const token = this.generarToken();
    
    console.log('Token generado:', token);
  }


}
