import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
    public token: string = '';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) {
    }
    login(username: string, password: string): Observable<boolean> {
        return this.http.post('http://45.77.44.246:8080/auth', JSON.stringify({ username: username, password: password }), this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    // console.log(token);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;

                }
            }).catch(this.errorHandler);
      }
    errorHandler(error: Response) {
        let answer = confirm('Tài Khoản Đăng Nhập Không Đúng ?');
        if (answer) {
            return Observable.throw(error || 'SERVER ERROR');
        } else {
            console.log('end');
        }

    }
}
