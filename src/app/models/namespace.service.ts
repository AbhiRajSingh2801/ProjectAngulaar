import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamespaceService {


constructor(private http:HttpClient) { }
  async getData()
  {
    let promise = new Promise((resolve,reject)=>{
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*')
      let url = "http://localhost:5000/namespaces/dev";
      let data = this.http.get(url,{headers});
      resolve(data);
    })
  
    return await promise;
  }
}