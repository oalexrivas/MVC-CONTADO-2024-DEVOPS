import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(public service:DataService,public opcionMenuService:MenuOpcionService) { }

  ngOnInit() {
  }

  toggleMenuOption(opt: number) {
    this.service.toggleMenuOption(opt);
  }

  opcionMenu(opcion:string = "contabilidad") {
    this.opcionMenuService.setDatos(opcion);    
  }
}
