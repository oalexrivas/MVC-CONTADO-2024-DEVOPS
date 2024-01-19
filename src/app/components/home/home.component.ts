import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'MVP-v3';

  constructor(public service:DataService) {
  }

  buscando() {
    return this.service.buscando;
  }
  cerrarMenus() {
    this.service.closeMenus();
  }
}
