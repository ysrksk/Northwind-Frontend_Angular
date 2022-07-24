import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44398/api/auth"

  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    this.httpClient.post(this.apiUrl+"login", user)
  }
}
