import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla-consumidorfinal',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-consumidorfinal.component.html',
  styleUrl: './plantilla-consumidorfinal.component.css'
})
export class PlantillaConsumidorfinalComponent {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


   redirectToLink(url: string): void {
    window.location.assign(url);
  }
}
