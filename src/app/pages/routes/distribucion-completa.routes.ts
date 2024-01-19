import { Routes } from "@angular/router";

export const distribucion_rutas: Routes = [
  {
    path: 'contabilidad',
    loadChildren: () => import("../../components/contabilidadhome/contabilidad.module").then(m => m.ContabilidadModule)
  },
  {
    path: 'finanzas',
    loadChildren: () => import("../../components/finanzashome/finanzas.module").then(m => m.FinanzasModule)
  },
  {
    path: 'rrhh',
    loadChildren: () => import("../../components/rrhh_home/rrhh.module").then(m => m.RrhhModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import("../../components/configuracion/configuracion.module").then(m => m.ConfiguracionModule)
  }
]
