import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class JournalsService {
  private static readonly BASE_API: string = environment.apiBase;
  // private static readonly USERS_API: string = `${ContactsService.BASE_API}/users`;
  constructor() { }

}
