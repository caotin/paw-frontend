import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsService {
    private url: string = 'https://pau-project.herokuapp.com/api/';

    constructor(private http: Http) { }

    getTopNews() {
        return this.http.get(this.url + 'news/0/10')
            .map(response => response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
