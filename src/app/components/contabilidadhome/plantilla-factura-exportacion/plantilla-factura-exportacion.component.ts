import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-plantilla-factura-exportacion',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './plantilla-factura-exportacion.component.html',
  styleUrl: './plantilla-factura-exportacion.component.css'
})
export class PlantillaFacturaExportacionComponent {
  constructor(private router: Router) { }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
  
   redirectToLink(url: string): void {
    window.location.assign(url);
  }
}
