import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contabilidadinicio',
  templateUrl: './contabilidadinicio.component.html',
  styleUrls: ['./contabilidadinicio.component.css']
})
export class ContabilidadinicioComponent {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


   redirectToLink(url: string): void {
    window.location.assign(url);
  }
  
}
