import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private url = ' https://b5fb-170-84-127-219.ngrok-free.app/api/pdf';
  private urlpdf = ' https://b5fb-170-84-127-219.ngrok-free.app/temp';
  constructor(private _http: HttpClient) {}

  public generatePDF(data: any): Observable<any> {
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }),
      
    };
    return this._http.post(`${this.url}/generate`, data, httpOptions); 
  }

  public getPDF(pdfId: string): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json', // Espera una respuesta de tipo Blob (para archivos)
    };
    console.log(`${this.url}/${pdfId}`);
    return this._http.get(`${this.urlpdf}/${pdfId}`, httpOptions);
  }
  getPdfBlob(pdfUrl: string): Observable<Blob> {
    return this._http.get(pdfUrl, { responseType: 'blob' });
  }
  
}

