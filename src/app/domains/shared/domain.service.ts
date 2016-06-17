import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Domain } from './domain';

const URL = 'http://localhost:3000/domains';

@Injectable()
export class DomainService {

    constructor(private http: Http) { }

    get(): Observable<Domain[]> {
        return this.http.get(URL)
            .map((response : Response) => response.json() || {})
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}