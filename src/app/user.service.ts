import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
    config = {
        authUrl: 'http://5c505db9ee97f600140480dd.mockapi.io/auth'
    };

    user: BehaviorSubject<any> = new BehaviorSubject({
      user: {}
    });

    authenticated: boolean = false;

    constructor(private http: HttpClient) {
      const user = localStorage.getItem('user');
      if(user) {
        this.user.next(JSON.parse(user));
        this.authenticated = true;
      }
    }

    getUser() {
      return this.user;
    }

    auth() {
      this.http.post(this.config.authUrl, {}).subscribe(data => {
        this.user.next(data);
        this.authenticated = true;

        localStorage.setItem('user', JSON.stringify(data));
      })
    }

    isAuthenticated() {
      return this.authenticated;
    }

}
