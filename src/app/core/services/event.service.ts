import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
@Injectable()
export class EventService {

    private url: string = 'https://pau-project.herokuapp.com/api/';

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
