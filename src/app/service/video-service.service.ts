import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private http: HttpClient) { }
  private url= 'http://localhost:3000/Video';
  private httpOptions={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  };
  GetVideo(): Observable<any>{
    return this.http.get<any>(this.url,this.httpOptions);
  }
  AddVideo(body:any): Observable<any>{
    return this.http.post<any>(this.url,body,this.httpOptions);
  }
  UpdateVideo(id:String, body:any): Observable<any>{
    const url=`${this.url}/${id}`
    return this.http.put<any>(url,body,this.httpOptions)
  }
  DeleteVideo(id:String): Observable<any>{
    const url=`${this.url}/${id}`;
    return this.http.delete<any>(url,this.httpOptions);
  }
  GetVideoID(id:String): Observable<any>{
    const url=`${this.url}/${id}`;
    return this.http.get<any>(url,this.httpOptions);
  }
  uploadFile(image: any){
    const data=new FormData();
    data.append('image',image);
    const url=`${this.url}/upload`;
    return this.http.post<any>(url,data);
  }
}
