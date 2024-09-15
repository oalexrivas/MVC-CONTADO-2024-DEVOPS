import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante-donacion',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './comprobante-donacion.component.html',
  styleUrl: './comprobante-donacion.component.css'
})
export class ComprobanteDonacionComponent {
  constructor(private router: Router) { }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
  
   redirectToLink(url: string): void {
    window.location.assign(url);
  }
}
