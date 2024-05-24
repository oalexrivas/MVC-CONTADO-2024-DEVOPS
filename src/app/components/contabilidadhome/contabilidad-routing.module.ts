import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumidorfinalComponent } from './documentodte/consumidorfinal/consumidorfinal.component';
import { CreditofiscalComponent } from './documentodte/creditofiscal/creditofiscal.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { RegistrosComponent } from './registros/registros.component';
import { RegistroTokenComponent } from './registrotoken/registrotoken.component';

const routes: Routes = [
  {path: 'registros', component:RegistrosComponent},
  {path: 'registrotoken', component:RegistroTokenComponent},
  {path: 'documentodte/consumidorfinal', component:ConsumidorfinalComponent},
  {path: 'documentodte/creditofiscal', component:CreditofiscalComponent},
  {path: 'ingresoconsumidorfinal', component:ContabilidadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
