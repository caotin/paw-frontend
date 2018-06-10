import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Slide } from '../model/slide';
@Injectable()
export class SlideService {

    private baseUrl: string = 'https://pau-project.herokuapp.com/api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private slide = new Slide();
    public token: string;
    constructor(private _http: Http) {
        this.token = localStorage.getItem('token');
    }
    // getCount
    getCount() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        // getdata
        return this._http.get('https://pau-project.herokuapp.com/api/news/count', options).map((response: Response) => response.json());
    }
    // getdata
    getSlide() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        // getdata
        return this._http.get('https://pau-project.herokuapp.com/api/slide', options).map((response: Response) => response.json());
    }
    // Add data
    createFeedback(slide: Slide) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        // create
        return this._http.post('https://pau-project.herokuapp.com/api/slide/new', JSON.stringify(slide), options).map(this.extractData).catch(this.errorHandler);

    }
    // update data
    updateFeedback(slide: Slide) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        // create
        return this._http.put('https://pau-project.herokuapp.com/api/slide/update', JSON.stringify(slide), options).map(this.extractData).catch(this.errorHandler);

    }

    // delete data
    deleteSlide(id: Number) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete('https://pau-project.herokuapp.com/api/slide/delete/' + id, options).map(this.extractData).catch(this.errorHandler);
    }
    // set data
    setter(slide: Slide) {
        this.slide = slide;
    }
    // get data
    getter() {
        return this.slide;
    }
    // Error
    errorHandler(error: Response) {
        return Observable.throw(error || 'SERVER ERROR');
    }
    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }

}
