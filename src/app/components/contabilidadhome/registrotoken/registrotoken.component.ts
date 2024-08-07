import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroToken } from 'src/app/pages/interfaces/registrotoken';

import Swal from 'sweetalert2';

export interface UserData {
  token: string;
  usuario: string;
  fecha: string;
}

@Component({
  selector: 'app-registros',
  templateUrl: './registrotoken.component.html',
  styleUrls: ['./registrotoken.component.css']
})
export class RegistroTokenComponent implements OnInit {
  public opcion: number = 1;
  editable = false;
  seleccionado: any = null;
  lista: RegistroToken[] = [];
  tokenData: any = null;  

  displayedColumns: string[] = ['usuario', 'fecha', 'token' ];
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit() {
    this.obtenerToken();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  obtenerToken(): void {
    const token = this.getCookie('token'); // Asumiendo que tienes una función getCookie
    const query = `
    query ObtenerRegistroToken {
      obtenerRegistroToken {
        id
        idPersona
        tokenActual
        tokenAnterior
        fechaGeneracion
      }
    }
    `;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.post<any>('http://localhost:4000/', { query }, { headers }).subscribe({
      next: result => {
        const tokenData = result.data.obtenerRegistroToken;
        console.log(tokenData);
        const lista = tokenData.map((item: any) => ({
          usuario: item.idPersona,
          fecha: item.fechaGeneracion,
          token: item.tokenActual
          
        })); 
        this.dataSource.data = lista;
        console.log(JSON.stringify(this.dataSource.data));  
      },
      error: error => {
        console.error('Error fetching data:', error);
      }
    });
  }
  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  } 
}



