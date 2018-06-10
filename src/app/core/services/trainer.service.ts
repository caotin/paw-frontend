import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class TrainerService {

    private url: string = 'https://pau-project.herokuapp.com/api/';

    constructor(private http: Http) { }

    getAllTrainers() {
        return this.http.get(this.url + 'trainer')
            .map(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
