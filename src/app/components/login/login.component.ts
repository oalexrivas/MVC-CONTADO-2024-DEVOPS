import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public dataService:DataService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    // Inicializar Modo de Color de sitio
    this.dataService.cambiarTema(this.dataService.getPreferredTheme());
    this.dataService.cambiarEscalaGrises(true);
  }
  public mostrarPassword: boolean = false;

  ingresar(){
    this.router.navigate(['contabilidad/documentodte/consumidorfinal'])
  }
}
