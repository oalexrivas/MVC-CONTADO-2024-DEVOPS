import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { ContabilidadinicioComponent } from './contabilidadinicio/contabilidadinicio.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { MatTableModule } from '@angular/material/table';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { RegistrosComponent } from './registros/registros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ContabilidadinicioComponent,
    CreditofiscalComponent,
    ConsumidorfinalComponent,
    ContabilidadComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    MatTableModule,
    RouterModule,
    MatTabsModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
  ]
})
export class ContabilidadModule { }
