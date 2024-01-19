import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.css']
})
export class RrhhComponent {
  constructor(public service:DataService) {
    // console.log(service.desplegar);
  }
}
