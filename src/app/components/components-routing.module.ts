import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from './home/home.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { FinanzasComponent } from './finanzashome/finanzas/finanzas.component';
import { ContabilidadComponent } from './contabilidadhome/contabilidad/contabilidad.component';
import { RrhhComponent } from './rrhh_home/rrhh/rrhh.component';
import { CatalogUserComponent } from './catalog-user/catalog-user.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CreditofiscalComponent } from './contabilidadhome/documentodte/creditofiscal/creditofiscal.component';
import { ConsumidorfinalComponent } from './contabilidadhome/documentodte/consumidorfinal/consumidorfinal.component';
import { RegistroproveedoresComponent } from './registros/registroproveedores/registroproveedores.component';
import { ContabilidadregistroclientesComponent } from './registros/registroclientes/contabilidadregistroclientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      //{path: 'resultados', component: ResultadosComponent},
      {path: 'pdfView', component: PdfViewComponent},
      {path: 'finanzas', component: FinanzasComponent},
      {path: 'rrhh', component: RrhhComponent},
      {path: 'usercatalog', component: CatalogUserComponent},
      {path: 'ejemplo', component: EjemploComponent},
      {path: 'registro/registroclientes', component: ContabilidadregistroclientesComponent},
      {path: 'registro/registroproveedores', component: RegistroproveedoresComponent},
      {path: '**', redirectTo: 'resultados' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class ComponentsRoutingModule { }
