import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuLateral } from '../interfaces/menu';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  public tituloS: string = "";
  public menus: Array<MenuLateral> = [];
  public userRole: string = 'administrador';

  constructor(public service: DataService, public opcionMenuService: MenuOpcionService, private router: Router) { }

  ngOnInit() {
    this.opcionMenuService.changeString.subscribe((opcion) => {
      this.menus = this.menu(this.opcionMenuService.getDatos());
      this.router.navigate([this.menus[1].ruta]);
      this.tituloS = this.menus[1].titulo;
    });

    // Después de iniciar sesión se cargará esta opción por defecto
    this.menus = this.menu("contabilidad");
    this.service.toggleMenuOption(2);
  }

  menu(valor: string) {
    let menu: object = {
      "configuracion": [
        { titulo: "Configuración", icono: "assignment" },
        { titulo: "Historial DTE", icono: "history", ruta: "/configuracion/registro/usuarios" },
        { titulo: "Historial TOKEN", icono: "token", ruta: "/contabilidad/registrotoken" }
      ],
      "registro": [
        { titulo: "Registros", icono: "assignment" },
        { titulo: "Registro Usuario", icono: "person_add", ruta: "/contabilidad/registrousuario" },
        { titulo: "Registro Emisor", icono: "store", ruta: "/contabilidad/registroemisor" },
        { titulo: "Registro Receptor", icono: "person", ruta: "/contabilidad/registroreceptor" },
        { titulo: "Registro Establecimiento", icono: "business", ruta: "/contabilidad/registroestablecimiento" },
        { titulo: "Registro Contabilidad", icono: "account_balance", ruta: "/configuracion/registro/contabilidades" },
        { titulo: "Registro ProductoServicios", icono: "shopping_cart", ruta: "/contabilidad/registroproductoservicio" }
      ],
      "contabilidad": [
        { titulo: "Contabilidad", icono: "account_balance", logo: "../../../assets/iconos/contabilidad.png" },
        { titulo: "Factura Electronica", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/consumidorfinal" },
        { titulo: "Comprobante de crédito fiscal", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/creditofiscal" },
        { titulo: "Nota de remisión", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/notaremision" },
        { titulo: "Nota de débito", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/notadebito" },
        { titulo: "Comprobante de retención", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobanteretencion" },
        { titulo: "Comprobante de liquidación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobanteliquidacion" },
        { titulo: "Documento contable de liquidación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/documentocontableliquidacion" },
        { titulo: "Facturas de exportación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/facturaexportacion" },
        { titulo: "Factura de sujeto excluido", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/facturasujetoexcluido" },
        { titulo: "Comprobante de donación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobantedonacion" }
      ],
      "finanzas": [
        { titulo: "Finanzas", logo: "../../../assets/iconos/Logo-Contabilidad.png" },
        { titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png", ruta: "/finanzas/finanzasinicio" },
      ],
      "rrhh": [
        { titulo: "RRHH", logo: "../../../assets/iconos/Logo-Contabilidad.png" },
        { titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png", ruta: "/rrhh/inicio" },
      ]
    };
    return menu[valor as keyof typeof menu];
  }
}

