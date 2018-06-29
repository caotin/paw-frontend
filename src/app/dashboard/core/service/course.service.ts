import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Course } from '../../core/model/course';
@Injectable()
export class CourseService {
    private baseUrl: string = 'http://45.77.44.246:8080/api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private course = new Course();
    public token: string;
    constructor(private _http: Http) {
        this.token = localStorage.getItem('token');
    }
    // getcount
    getCount() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        // getdata
        return this._http.get('http://45.77.44.246:8080/api/course/count', options).map((response: Response) => response.json());
    }
    // getdata
    getCourse() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        // getdata
        return this._http.get('http://45.77.44.246:8080/api/course', options).map((response: Response) => response.json());
    }
    // Add data
    createCourse(course: Course) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        // create
        return this._http.post('http://45.77.44.246:8080/api/course/new', JSON.stringify(course), options).map(this.extractData).catch(this.errorHandler);

    }
    // update data
    updateCourse(course: Course) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        // create
        return this._http.put('http://45.77.44.246:8080/api/course/update', JSON.stringify(course), options).map(this.extractData).catch(this.errorHandler);

    }
    // delete data
    deleteCourse(id: Number) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete('http://45.77.44.246:8080/api/course/delete/' + id, options).map(this.extractData).catch(this.errorHandler);
    }
    // set data
    setter(course: Course) {
        this.course = course;
    }
    // get data
    getter() {
        return this.course;
    }
    // Error
    errorHandler(error: Response) {
        return Observable.throw(error || 'SERVER ERROR');
    }
    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }
}
