import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  // title = 'BuscadorAngular3';

  public datos1: Array<any> = [];

  //Se generan los nombres de las columnas mediane un arreglo
  columnas: string[] = ['codigo', 'name'];
  //la variable datos de tipo Articulo sera la que guarde todos los datos provvenientes de la API
  datos: Articulo[] = [];
  //el DataSource sera el que muestre los datos en la tabla (Usando los datos guarados en la variable datos)
  dataSource = new MatTableDataSource<Articulo>(this.datos);

  listaParaMostrar: Array<any> = [];
  cantidadPorPagina = 10
  opcionesDeCantidades =[5, 10, 25, 100]

  //Sirve para el paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //Hace que se muestre el páginador en la tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public conectarServicio:DataService,   private router: Router) {
    this.datos1 = this.datos1.slice(0, this.cantidadPorPagina)
  }

  irPDFView(nameDoc: string) {
    //this.conectarServicio.pdfName = nameDoc;
    this.router.navigate(['/resultados/pdfView']);
  }

  // paginar(paginacion: any) {
  //   let actual = paginacion.pageIndex * paginacion.pageSize
  //   this.datos1 = this.datos1.slice(
  //     actual,
  //     actual + paginacion.pageSize
  //   );
  // }

  /*Este metodo que sera llamado a la hora de cargar la página, sera el encargado de mandar a llamar los datos
  suscribirse y ingresar los datos a las variables(arreglos) respectivos*/
  ngOnInit() {
    //Conecta con el servicio y muestra los datos
    this.conectarServicio.getDatos().subscribe((resp:any) => {
      console.log(resp);
      //Los ingresa en una variable temporal para luego ser ingresados en el arrelo correcto
      this.datos1 = resp;
      // console.log(typeof(this.datos1));
      //Un ciclo For que ingresara los datos respectivos 1 a 1 en las filas
      for(const result of this.datos1){
        //Usa .push
        this.datos.push( new Articulo(result.id, result.nombre + result.tipo))
      }
      // this.dataSource = new MatTableDataSource<Articulo>(datos);
    })
    
  }

  //Metodo utilizado para filtrar los datos, recibe un evento
  // filtrar(event: Event) {
  //   const filtro = (event.target as HTMLInputElement).value;
  //   //Muestra los datos filtrados
  //   this.dataSource.filter = filtro.trim().toLowerCase();
  // } 
}


export class Articulo {
  constructor(public codigo: number, public name: string) {

  }
}

