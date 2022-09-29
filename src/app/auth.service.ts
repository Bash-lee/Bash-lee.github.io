
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = "http:localhost:8080/"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(
     "http://localhost:8080/signin/"+ email +"/"+ password, httpOptions );
  }

 register(body:any) {
    return this.http.post(
      'http://localhost:8080/signUp',body);
  }

  logout() {
    return this.http.post<any>(AUTH_API + 'signout', { }, httpOptions);
  }
}
