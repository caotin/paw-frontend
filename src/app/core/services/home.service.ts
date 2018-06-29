import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class HomeService {

    private url: string = 'http://45.77.44.246:8080/api/';

    constructor(private http: Http) { }

    getCategories() {
        return this.http.get(this.url + 'group')
            .map(response => response.json())
            .catch(this.handleError);
    }
    getParentCourse() {
        return this.http.get(this.url + 'course/courseDESC/0/1')
            .map(response => response.json())
            .catch(this.handleError);
    }
    getChildCourse() {
        return this.http.get(this.url + 'course/courseDESC/0/3')
            .map(response => response.json())
            .catch(this.handleError);
    }
    getTopTrainer() {
        return this.http.get(this.url + 'trainer/top/0/5')
            .map(response => response.json())
            .catch(this.handleError);
    }
    getTopSlide() {
        return this.http.get(this.url + 'slide')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
