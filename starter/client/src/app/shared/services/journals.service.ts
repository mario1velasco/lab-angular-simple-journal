import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Journal } from '../models/journal.model';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JournalsService {
  private static readonly BASE_API: string = environment.apiBase;
  private static readonly JOURNALS_API: string = `${JournalsService.BASE_API}/journal-entries`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: JournalsService.defaultHeaders });

  constructor(private http: Http) {}

  list(): Observable<Array<Journal>> {
    return this.http.get(JournalsService.JOURNALS_API, JournalsService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
