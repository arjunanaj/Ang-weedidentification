import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Module4 } from '../_class/module4';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module4Service {

  private basicUrl:String="http://localhost:9091/Module_4"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addModule_4Info(module_4:Module4):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addModule_4Info`,module_4,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllModule_4Info():Observable<Module4[]>{
    return this.httpclient.get<Module4[]>(`${this.basicUrl}/getAllModule_4Info`)
  }
  
  public getModule_4Info(id:number):Observable<Module4>{
    return this.httpclient.get<Module4>(`${this.basicUrl}/getModule_4InfoById?id=${id}`)
  }

  public deleteModule_4Info(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteModule_4Info?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateModule_4Info(id:number,module_4:Module4):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateModule_4Info?id=${id}`,module_4,{observe:'response',responseType:'text' as 'json'})
  }
}
