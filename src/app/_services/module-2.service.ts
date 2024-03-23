import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Module2 } from '../_class/module2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module2Service {

  private basicUrl:String="http://localhost:9091/Module_2"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addModule_2Info(module_2:Module2):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addModule_2Info`,module_2,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllModule_2Info():Observable<Module2[]>{
    return this.httpclient.get<Module2[]>(`${this.basicUrl}/getAllModule_2Info`)
  }
  
  public getModule_2Info(id:number):Observable<Module2>{
    return this.httpclient.get<Module2>(`${this.basicUrl}/getModule_2InfoById?id=${id}`)
  }

  public deleteModule_2Info(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteModule_2Info?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateModule_2Info(id:number,module_2:Module2):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateModule_2Info?id=${id}`,module_2,{observe:'response',responseType:'text' as 'json'})
  }
}
