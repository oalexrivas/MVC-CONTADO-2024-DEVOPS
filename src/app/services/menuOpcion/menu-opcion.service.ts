import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuOpcionService {

  change: EventEmitter<boolean> = new EventEmitter();
  changeString: EventEmitter<string> = new EventEmitter();

  private opcionMenu: string = "";
  constructor() { }

  setDatos(datos: string) {
    this.opcionMenu = datos;
    this.changeString.emit(this.opcionMenu);
  }

  getDatos() {
    return this.opcionMenu;
  }
}
