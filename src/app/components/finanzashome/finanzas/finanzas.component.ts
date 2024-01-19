import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent {
  // desplegar: boolean = true;
  

  constructor(public service:DataService) {
    // console.log(service.desplegar);
  }

  // @HostBinding('class.is-open')
  // isOpen = false;

  // ngOnInit() {
  //   this.service.change.subscribe(isOpen => {
  //     this.isOpen = isOpen;
  //   });
  // }
}
