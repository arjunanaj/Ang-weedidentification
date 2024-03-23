import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Module5 } from '../_class/module5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module5Service {

  private basicUrl:String="http://localhost:9091/Module_5"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addModule_5Info(module_5:Module5):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addModule_5Info`,module_5,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllModule_5Info():Observable<Module5[]>{
    return this.httpclient.get<Module5[]>(`${this.basicUrl}/getAllModule_5Info`)
  }
  
  public getModule_5Info(id:number):Observable<Module5>{
    return this.httpclient.get<Module5>(`${this.basicUrl}/getModule_5InfoById?id=${id}`)
  }

  public deleteModule_5Info(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteModule_5Info?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateModule_5Info(id:number,module_5:Module5):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateModule_5Info?id=${id}`,module_5,{observe:'response',responseType:'text' as 'json'})
  }
}
