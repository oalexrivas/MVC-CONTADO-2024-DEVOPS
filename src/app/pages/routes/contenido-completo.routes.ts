import { Routes } from "@angular/router";

export const distribucion_completa_rutas: Routes = [
  {
    path: 'login',
    loadChildren: () => import("../../components/login/login.module").then(m => m.LoginModule)
  }, 
]
