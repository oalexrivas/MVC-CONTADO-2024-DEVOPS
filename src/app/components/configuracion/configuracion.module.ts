import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { RegistroContabilidadesComponent } from './registro-contabilidades/registro-contabilidades.component';
import { HistorialCambiosComponent } from './historial-cambios/historial-cambios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerComponent } from '../_base-components/input-datepicker/custom-datepicker.component';
import { FormsModule } from '@angular/forms';
import { PdfViewComponent } from '../pdf-view/pdf-view.component';

@NgModule({
  declarations: [
    PerfilComponent,
    RegistroUsuariosComponent,
    RegistroContabilidadesComponent,
    HistorialCambiosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConfiguracionRoutingModule,
    MatTableModule,
    RouterModule,
    NgbModule,
    CustomDatepickerComponent,
    PdfViewComponent
  ]
})
export class ConfiguracionModule { }
