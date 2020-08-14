import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiRequest {
  private path = '/crud-back/';
  constructor(private http: HttpClient) {
    const url = location.href;
    if (url.search('localhost') >= 0) {
      this.path = 'http://localhost/crud-back/';
    }
  }


  post(point, action, data, user2={}) {
    return this.http.post(this.path + point, {acao: action, dados: data, user: user2});
  }
}

