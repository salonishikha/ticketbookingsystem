import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './../../shared/base.service';

export class Theater {
	_id: string;
	title: string;
	address: string;

	constructor(options: any) {
		this._id = options._id;
		this.title = options.title;
		this.address = options.address;
	}
}
@Injectable()
export class TheaterService {

	public url: string;

	constructor(
		public http: Http,
		public baseService: BaseService,
	) {
		this.url = this.baseService.url + 'theater';
	}

	list(): Observable<Theater[]> {
		return this.http.get(this.url, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	create(theater: Theater): Observable<Theater> {
		let body = JSON.stringify(theater);
		return this.http.post(this.url, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}
}
