import { Component, EventEmitter, HostListener, Input, OnInit } from '@angular/core';
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
  public isMobile: boolean = false; // Nueva propiedad para detectar si es móvil

  constructor(public service: DataService, public opcionMenuService: MenuOpcionService, private router: Router) { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768; // Si el ancho de la pantalla es menor o igual a 768px, es móvil

    this.opcionMenuService.changeString.subscribe((opcion) => {
      this.menus = this.menu(this.opcionMenuService.getDatos());
      this.router.navigate([this.menus[1].ruta]);
      this.tituloS = this.menus[1].titulo;
    });

    // Después de iniciar sesión se cargará esta opción por defecto
    this.menus = this.menu("contabilidad");
    this.service.toggleMenuOption(2);
  }
  // Método para manejar el redimensionamiento de pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
  
  }

  

  // Método para mostrar u ocultar el menú dependiendo del estado móvil
  toggleMenu() {
    this.service.isOpen = !this.service.isOpen; // Alterna el estado del menú
  }


  menu(valor: string) {
    let menu: object = {
      "configuracion": [
        { titulo: "Configuración", icono: "assignment" },
        { titulo: "Historial DTE", icono: "history", ruta: "/configuracion/registro/usuarios" },
        { titulo: "Historial Usuario", icono: "token", ruta: "/contabilidad/registrotoken" },
        { titulo: "Historial Hacienda", icono: "token", ruta: "/contabilidad/registrotokenHacienda" },
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
        { titulo: "Facturas de exportación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/facturaexportacion" },
        { titulo: "Comprobante de donación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobantedonacion" },
      
        { titulo: "Nota de remisión", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/notaremision" },
        { titulo: "Nota de débito", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/notadebito" },
        { titulo: "Comprobante de retención", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobanteretencion" },
        { titulo: "Comprobante de liquidación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/comprobanteliquidacion" },
        { titulo: "Documento contable de liquidación", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/documentocontableliquidacion" },
      
        { titulo: "Factura de sujeto excluido", icono: "receipt", logo: "../../../assets/iconos/factura.png", ruta: "/contabilidad/documentodte/facturasujetoexcluido" },
       
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

