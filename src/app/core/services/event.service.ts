import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
@Injectable()
export class EventService {

    private url: string = 'http://45.77.44.246:8080/api/';

    constructor(private http: Http) { }

    getTopEvent() {
        return this.http.get(this.url + 'event/0/1')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
