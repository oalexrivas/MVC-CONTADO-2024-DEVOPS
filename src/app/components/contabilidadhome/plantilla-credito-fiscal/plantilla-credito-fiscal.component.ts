import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-plantilla-credito-fiscal',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './plantilla-credito-fiscal.component.html',
  styleUrl: './plantilla-credito-fiscal.component.css'
})
export class PlantillaCreditoFiscalComponent {
  constructor(private router: Router) { }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }


   redirectToLink(url: string): void {
    window.location.assign(url);
  }
}
