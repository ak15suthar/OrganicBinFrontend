import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganicbinserviceService {

  public applicationStatus:any= {1:"Pending", 2:"Accepted"};

  constructor(private http:HttpClient) { }

  signup(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}signup`,model);
  }

  login(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}login`,model);
  }

  getUserById(userId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getUserById/${userId}`).toPromise();
  }

  updateUser(model : any):Observable<any> {
    return this.http.put(`${environment.base_URL}updateUser`,model);
  }

  application(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}application`,model);
  }

  listApplication(userId : any):Promise<any> {
    return this.http.get(`${environment.base_URL}listApplication/${userId}`).toPromise()
  }

  listAllApplication():Promise<any> {
    return this.http.get(`${environment.base_URL}listAllApplication`).toPromise();
  }

  acceptApplication(model :any):Observable<any> {
    return this.http.put(`${environment.base_URL}acceptApplication`,model)
  }

  addBlog(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addBlog`,model);
  }

  listBlog():Promise<any> {
    return this.http.get(`${environment.base_URL}listBlog`).toPromise();
  }

  isLoggedIn(){
    if(sessionStorage.getItem('isLogin')){
      return true;
    }
    return false;
  }

  isAdminLogIn(){
    if(sessionStorage.getItem('isAdmin')){
      return true;
    }
    return false;
  }
}
