import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: any;
  constructor(private _httpClient: HttpClient) { }


  gethttpOptions() {
    this.userData = localStorage.getItem('UserDetails');
    this.userData = JSON.parse(this.userData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + this.userData['token']
      })
    };


    return httpOptions;
  }
  get(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this._httpClient.post(url, body);

  }


  put(url: string, id: number, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this._httpClient.put(url + id, body);
  }

  delete(url: string, id: number): Observable<any> {
    return this._httpClient.delete(url + id);
  }
  postdata(url: string, model: any): Observable<any> {
    
    const body = JSON.stringify(model);
    console.log("data",body);
    const header = this.gethttpOptions();
    return this._httpClient.post(url, body, header);
  }


  postImage(url: string, model: any): Observable<any> {
    const body = model;
    // const body = JSON.stringify(model)
    const header = this.gethttpOptions();
    return this._httpClient.post(url, body, header);
  }
  postpay(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    const header = this.gethttpOptions();
    return this._httpClient.post(url, body, header);
  }

  getData(url: string): Observable<any> {
    // console.log("url",url);
    const header = this.gethttpOptions();
    return this._httpClient.post(url, {}, header);
  }
  getdata(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    const header = this.gethttpOptions();
    return this._httpClient.post(url, body, header);
  }

  postImages(url: string, model: any): Observable<any> {
    this.userData = localStorage.getItem('UserDetails');
    this.userData = JSON.parse(this.userData);
    console.log("userData",this.userData['token']);
    
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + this.userData['token']
    })
      .set("isImage", "isImage");

    return this._httpClient.post(url, model, {
      headers: httpHeaders
    });
  }
}
