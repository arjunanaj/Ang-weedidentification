import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Module1 } from '../_class/module1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module1Service {

  private basicUrl:String="http://localhost:9091/Module_1"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addModule_1Info(module_1:Module1):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addModule_1Info`,module_1,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllModule_1Info():Observable<Module1[]>{
    return this.httpclient.get<Module1[]>(`${this.basicUrl}/getAllModule_1Info`)
  }
  
  public getModule_1Info(id:number):Observable<Module1>{
    return this.httpclient.get<Module1>(`${this.basicUrl}/getModule_1InfoById?id=${id}`)
  }

  public deleteModule_1Info(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteModule_1Info?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateModule_1Info(id:number,module_1:Module1):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateModule_1Info?id=${id}`,module_1,{observe:'response',responseType:'text' as 'json'})
  }
}
