import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuIntermedioComponent } from './menu-intermedio/menu-intermedio.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PdfViewComponent } from '../components/pdf-view/pdf-view.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    FooterComponent,
    MenuIntermedioComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    PdfViewComponent,
    MatIconModule,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    MenuIntermedioComponent,
  ],
})
export class PagesModule { }

