import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Archivo } from '../pages/interfaces/archivo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //URL base del buscador node corriendo local
  _url = 'http://localhost:3010/buscador';
  buscando: boolean = false;

  //Variable que almacenara el valor a pasar
  arregloFiltrado: Array<any> = [];
  busquedaSeleccionado: string = "";

  /* Variables para tema del sitio */
  escalaGrises = false;
  tema = 'light';

  constructor( private http: HttpClient ) {
    //console.log("Servicio Funcionando");
  }

  getDatos() {
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {headers: heades});
  }
  
  buscarDatos(archivo: string)  {
    let promise = new Promise<void>((resolve, reject) => {
      const params = new HttpParams().set('archivo', archivo);
  
      this.http.get<Archivo[]>(this._url, { params }).subscribe({
        next: (res) => {
          this.arregloFiltrado = res
          resolve()
        }
      });
    });
    return promise;
  }

  isOpen: boolean = false;
  isOpenMenuSuperior: boolean = false;
  optMenu: number = 0;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
  toggleMenuSuperior() {
    this.isOpenMenuSuperior = !this.isOpenMenuSuperior;
    this.change.emit(this.isOpenMenuSuperior);
  }
  closeMenus() {
    this.isOpenMenuSuperior = false;
    this.change.emit(this.isOpenMenuSuperior);
    this.isOpen = true;
    this.change.emit(this.isOpen);
  }

  /* Para cambiar el color del menu superior seleccinado */
  toggleMenuOption(opt: number) {
    this.optMenu = opt;
    this.changeNumber.emit(this.optMenu);
  }
  isMenuSelected(opt: number) {
    return (opt == this.optMenu);
  }

  /* Cambio de tema */
  setStoredTheme = (theme:string) => localStorage.setItem('theme', theme)
  getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    const storedColor = localStorage.getItem('themeColor')
    if (storedColor!=null) {
      this.escalaGrises = storedColor=='true';
    }
    if (storedTheme) {
      return storedTheme
    } else {
      this.setStoredTheme("light");
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  cambiarTema(nuevoTema:string) {
    if (nuevoTema != this.tema) {
      let element = document.body;
      
      this.tema = nuevoTema;
      this.setStoredTheme(nuevoTema);
  
      element.dataset['bsTheme'] = nuevoTema;
    }
  }
  cambiarEscalaGrises(primeraVez=false) {
    let html = document.documentElement;
    if (!primeraVez) {
      this.escalaGrises = !this.escalaGrises;
    }  
    if (this.escalaGrises) {
      html.classList.add('grayscale');
    } else {
      html.classList.remove('grayscale');
    }
    localStorage.setItem('themeColor', this.escalaGrises ? 'true':'false');
  }
}
