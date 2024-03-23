import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Module3 } from '../_class/module3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module3Service {

  private basicUrl:String="http://localhost:9091/Module_3"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addModule_3Info(module_3:Module3):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addModule_3Info`,module_3,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllModule_3Info():Observable<Module3[]>{
    return this.httpclient.get<Module3[]>(`${this.basicUrl}/getAllModule_3Info`)
  }
  
  public getModule_3Info(id:number):Observable<Module3>{
    return this.httpclient.get<Module3>(`${this.basicUrl}/getModule_3InfoById?id=${id}`)
  }

  public deleteModule_3Info(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteModule_3Info?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateModule_3Info(id:number,module_3:Module3):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateModule_3Info?id=${id}`,module_3,{observe:'response',responseType:'text' as 'json'})
  }
}
