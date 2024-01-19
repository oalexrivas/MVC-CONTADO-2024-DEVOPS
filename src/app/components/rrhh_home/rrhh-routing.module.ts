import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrhhComponent } from './rrhh/rrhh.component';

const routes: Routes = [
  {path: 'inicio', component:RrhhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
