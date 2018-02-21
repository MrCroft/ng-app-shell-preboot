import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IApiResponse } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  private apiEndPoint = environment.api;

  constructor(
    private httpClient: HttpClient
  ) {}

  getVideos() {
    return this.httpClient.get<IApiResponse>(`${this.apiEndPoint}/videos.json`)
      .catch(err => {
        return Observable.of({
          success: false,
          payload: {
            total: 0,
            items: []
          }
        });
      });
  }

}
