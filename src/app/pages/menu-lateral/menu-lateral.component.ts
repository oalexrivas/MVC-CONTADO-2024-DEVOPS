import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuLateral } from '../interfaces/menu';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
import { Router } from '@angular/router';
//interfaces/Contabilidad/menucontabilidad';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  public tituloS:string="";
  public menus: Array<MenuLateral> = [];
  public userRole: string = 'administrador';

  constructor(public service:DataService,public opcionMenuService:MenuOpcionService, private router: Router) { }

  ngOnInit() {
    this.opcionMenuService.changeString.subscribe((opcion)=>{
      this.menus = this.menu(this.opcionMenuService.getDatos());
      this.router.navigate([this.menus[1].ruta])
      this.tituloS = this.menus[1].titulo;
    });
    
    /* Después de iniciar sesión se cargará esta opción por defecto */
    this.menus = this.menu("contabilidad");
    this.service.toggleMenuOption(2);
  }

  menu(valor:string){
    let menu : object = {

      "configuracion": [
        {titulo: "Configuración", logo: "../assets/iconos/configuraciones.png"},
        {titulo: "Historial DTE", logo: "../assets/iconos/historial-de-transacciones.png", ruta: "/configuracion/registro/usuarios"},
        {titulo: "Historial TOKEN", logo: "../../../assets/iconos/historial-de-transacciones.png",ruta: "/contabilidad/registrotoken"}
      ],
      "registro": [
        {titulo: "Registros", logo: "../assets/iconos/registroInformacion.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/inicio.png",ruta: "/contabilidad/registroinicio"},
        {titulo: "Registro Usuario", logo: "../assets/iconos/agregar.png", ruta: "/contabilidad/registrousuario"},
        {titulo: "Registro Emisor", logo: "../assets/iconos/emisor.png", ruta: "/contabilidad/registroemisor"},
        {titulo: "Registro Receptor", logo: "../assets/iconos/receptor.png", ruta: "/contabilidad/registroreceptor"},
        {titulo: "Registro Establecimiento", logo: "../assets/iconos/establecimiento.png", ruta: "/contabilidad/registroestablecimiento"},
        {titulo: "Registro Contabilidad", logo: "../assets/iconos/perfil.png", ruta: "/configuracion/registro/contabilidades"},
        {titulo: "Registro ProductoServicios", logo: "../assets/iconos/producto.png", ruta: "/contabilidad/registroproductoservicio"}
      ],
      "contabilidad":[
        {titulo: "Contabilidad", logo: "../../../assets/iconos/contabilidad.png"},
        {titulo: "Factura Electronica", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/consumidorfinal"},
        {titulo: "Comprobante de crédito fiscal", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/creditofiscal"},
        {titulo: "Nota de remisión", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/notaremision"},
        {titulo: "Nota de débito", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/notadebito"},
        {titulo: "Comprobante de retención", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/comprobanteretencion"},
        {titulo: "Comprobante de liquidación", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/comprobanteliquidacion"},
        {titulo: "Documento contable de liquidación", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/documentocontableliquidacion"},
        {titulo: "Facturas de exportación", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/facturaexportacion"},
        {titulo: "Factura de sujeto excluido", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/facturasujetoexcluido"},
        {titulo: "Comprobante de donación ", logo: "../../../assets/iconos/factura.png",ruta: "/contabilidad/documentodte/comprobantedonacion"}
      ],
      "finanzas":[
        {titulo: "Finanzas", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/finanzas/finanzasinicio"},
      ],
      "rrhh":[
        {titulo: "RRHH", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/rrhh/inicio"},
      ]
    }
    return menu[valor as keyof typeof menu];
  }

}
