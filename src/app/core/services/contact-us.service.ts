import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ContactUsService {

    private url: string = 'http://45.77.44.246:8080/api/';
    headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    postContact(data: any) {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.url + 'contact', data, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
