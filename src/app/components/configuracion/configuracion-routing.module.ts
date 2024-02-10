import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { RegistroContabilidadesComponent } from './registro-contabilidades/registro-contabilidades.component';
import { RegistroTokenComponent } from './token-contabilidades/token-contabilidades.component';
import { HistorialCambiosComponent } from './historial-cambios/historial-cambios.component';

const routes: Routes = [
  {path: 'perfil', component:PerfilComponent},
  {path: 'registro/usuarios', component:RegistroUsuariosComponent},
  {path: 'registro/contabilidades', component:RegistroContabilidadesComponent},
  {path: 'historial-cambios', component:HistorialCambiosComponent},
  {path: 'registro/token', component:RegistroTokenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
