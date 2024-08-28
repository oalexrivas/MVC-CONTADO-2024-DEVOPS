import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { ContabilidadinicioComponent } from './contabilidadinicio/contabilidadinicio.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { NotaremisionComponent } from './documentodte/notaremision/notaremision.component';
import { NotadebitoComponent } from './documentodte/notadebito/notadebito.component';
import { ComprobanteretencionComponent } from './documentodte/comprobanteretencion/comprobanteretencion.component';
import { ComprobanteliquidacionComponent } from './documentodte/comprobanteliquidacion/comprobanteliquidacion.component';
import { FacturaexportacionComponent } from './documentodte/facturaexportacion/facturaexportacion.component';
import { FacturasujetoexcluidoComponent } from './documentodte/facturasujetoexcluido/facturasujetoexcluido.component';
import { ComprobantedonacionComponent } from './documentodte/comprobantedonacion/comprobantedonacion.component';
import { MatTableModule } from '@angular/material/table';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule} from '@angular/material/tabs';
import { RegistrosComponent } from './registros/registros.component';
import { RegistroTokenComponent } from './registrotoken/registrotoken.component';
import { RegistroTokenHaciendaComponent } from './registrotokenHacienda/registrotokenHacienda.component';
import { RegistroUsuarioComponent } from './registrousuario/registrousuario.component';
import { RegistroEmisorComponent } from './registroemisor/registroemisor.component';
import { RegistroReceptorComponent } from './registroreceptor/registroreceptor.component';
import { RegistroEstablecimientoComponent } from './registroestablecimiento/registroestablecimiento.component';
import { RegistroProductoservicioComponent } from './registroproductoservicio/registroproductoservicio.component';
//import { RegistroProductoservicioComponent } from './registroproductoservicio/registroproductoservicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ContabilidadinicioComponent,
    CreditofiscalComponent,
    ConsumidorfinalComponent,
    NotaremisionComponent,
    NotadebitoComponent,
    ComprobanteretencionComponent,
    ComprobanteliquidacionComponent,
    FacturaexportacionComponent,
    ComprobantedonacionComponent,
    ContabilidadComponent,
    RegistrosComponent,
    FacturasujetoexcluidoComponent,
    RegistroTokenComponent,
    RegistroTokenHaciendaComponent,
    RegistroUsuarioComponent,
    RegistroEmisorComponent,
    RegistroReceptorComponent,
    RegistroEstablecimientoComponent,
    RegistroProductoservicioComponent
    //RegistroProductoservicioComponent
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
    HttpClientModule,
    MatPaginatorModule,
    
  ]
})
export class ContabilidadModule { }
