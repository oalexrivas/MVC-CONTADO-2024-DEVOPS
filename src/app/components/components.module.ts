import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ComponentsRoutingModule } from './components-routing.module';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';
import { CustomDatepickerComponent } from './_base-components/input-datepicker/custom-datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FilterPipe,
    CatalogUserComponent,
    RegistroClientesComponent,
    EjemploComponent,
    RegistroproveedoresComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    CustomDatepickerComponent
  ],
  exports: [
  ],
})
export class ComponentsModule { } 
