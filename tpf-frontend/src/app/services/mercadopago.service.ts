import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor(private _http : HttpClient) { }

  getPagoLink(monto : number, idAlquier : string) : Observable<any>{

    const url = " https://b5fb-170-84-127-219.ngrok-free.app/api/mercadopago/pago";

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    const body = {
      monto : monto,
      idAlquiler : idAlquier
    }
    
    return this._http.post(url, body, httpOptions);
  }
}
