import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { NotaremisionComponent } from './documentodte/notaremision/notaremision.component';
import { NotadebitoComponent } from './documentodte/notadebito/notadebito.component';
import { ComprobanteretencionComponent } from './documentodte/comprobanteretencion/comprobanteretencion.component';
import { ComprobanteliquidacionComponent } from './documentodte/comprobanteliquidacion/comprobanteliquidacion.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { FacturaexportacionComponent } from './documentodte/facturaexportacion/facturaexportacion.component';
import { FacturasujetoexcluidoComponent } from './documentodte/facturasujetoexcluido/facturasujetoexcluido.component';
import { ComprobantedonacionComponent } from './documentodte/comprobantedonacion/comprobantedonacion.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';

import { RegistrosComponent } from './registros/registros.component';
import { RegistroTokenComponent } from './registrotoken/registrotoken.component';
import { RegistroTokenHaciendaComponent } from './registrotokenHacienda/registrotokenHacienda.component';
import { RegistroUsuarioComponent } from './registrousuario/registrousuario.component';
import { RegistroEmisorComponent } from './registroemisor/registroemisor.component';
import { RegistroReceptorComponent } from './registroreceptor/registroreceptor.component';
import { RegistroEstablecimientoComponent } from './registroestablecimiento/registroestablecimiento.component';
import { RegistroProductoservicioComponent } from './registroproductoservicio/registroproductoservicio.component';
//import { RegistroProductoservicioComponent } from './registroproductoservicio/registroproductoservicio.component';
import { PlantillaConsumidorfinalComponent } from './plantilla-consumidorfinal/plantilla-consumidorfinal.component';
import { PlantillaCreditoFiscalComponent } from './plantilla-credito-fiscal/plantilla-credito-fiscal.component';
import { PlantillaFacturaExportacionComponent } from './plantilla-factura-exportacion/plantilla-factura-exportacion.component';
import { ContabilidadinicioComponent } from './contabilidadinicio/contabilidadinicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprobanteDonacionComponent } from './comprobante-donacion/comprobante-donacion.component';
const routes: Routes = [
  {path: 'registros', component:RegistrosComponent},
  {path: 'registrotoken', component:RegistroTokenComponent},
  {path: 'registrotokenHacienda', component:RegistroTokenHaciendaComponent},
  {path: 'registrousuario', component:RegistroUsuarioComponent},
  {path: 'registroemisor', component:RegistroEmisorComponent},
  {path: 'registroreceptor', component:RegistroReceptorComponent},
  {path: 'registroestablecimiento', component:RegistroEstablecimientoComponent},
  {path: 'registroproductoservicio', component:RegistroProductoservicioComponent},
  //{path: 'registroproductoservicio', component:RegistroProductoservicioComponent},
  {path: 'documentodte/consumidorfinal', component:ConsumidorfinalComponent},
  {path: 'documentodte/creditofiscal', component:CreditofiscalComponent},
  {path: 'documentodte/notaremision', component:NotaremisionComponent},
  {path: 'documentodte/notadebito', component:NotadebitoComponent},
  {path: 'documentodte/comprobanteretencion', component:ComprobanteretencionComponent},
  {path: 'documentodte/comprobanteliquidacion', component:ComprobanteliquidacionComponent},
  {path: 'documentodte/facturasujetoexcluido', component:FacturasujetoexcluidoComponent},
  {path: 'documentodte/comprobantedonacion', component:ComprobantedonacionComponent},
  {path: 'documentodte/facturaexportacion', component:FacturaexportacionComponent},
  {path: 'registrocliente', component:ContabilidadComponent},
  {path: 'ingresoconsumidorfinal', component:PlantillaConsumidorfinalComponent},
  {path: 'registroinicio', component: ContabilidadinicioComponent },
  {path: 'registroconsumidor', component: PlantillaConsumidorfinalComponent},
  {path: 'registrocreditofiscal', component: PlantillaCreditoFiscalComponent},
  {path:'registrofacturaexportacion', component:PlantillaFacturaExportacionComponent},
  {path:'comprobante-donacion', component:ComprobanteDonacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
