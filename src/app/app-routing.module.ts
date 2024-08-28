import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {  distribucion_rutas } from './pages/routes/distribucion-completa.routes';
import { distribucion_completa_rutas } from './pages/routes/contenido-completo.routes';
import { DistribucioncompletaComponent } from './components/distribucioncompleta/distribucioncompleta.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent, children: distribucion_rutas },
  { path: '', component: DistribucioncompletaComponent, children: distribucion_completa_rutas },
  { path: '', redirectTo: '/contabilidad/registroinicio', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
