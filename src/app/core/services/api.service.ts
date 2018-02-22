import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IApiResponse } from '../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  private apiEndPoint = environment.api;
  private VIDEOS_LIST_CACHE;

  constructor(
    private httpClient: HttpClient,
    private cache: TransferState
  ) {}


  getVideos(): Observable<IApiResponse> {
    const VIDEOS_LIST_KEY = makeStateKey('videos_list');
    if (this.cache.hasKey(VIDEOS_LIST_KEY)) {
      this.VIDEOS_LIST_CACHE = this.cache.get(VIDEOS_LIST_KEY, null);
      this.cache.remove(VIDEOS_LIST_KEY);
      console.log('-- VIDEOS FROM TransferState', this.VIDEOS_LIST_CACHE);
      return Observable.of(this.VIDEOS_LIST_CACHE);
    } else {
      return this.httpClient.get<IApiResponse>(`${this.apiEndPoint}/videos.json`)
        .do((res) => {
          console.log(`-- NO VIDEOS IN CACHE. Trying: ${this.apiEndPoint}/videos.json`);
          this.cache.onSerialize(VIDEOS_LIST_KEY, () => {
            return res;
          });
        })
        .catch(err => {
          // return Observable.of(err);
          return Observable.of({
            success: false,
            error: err,
            payload: {
              total: 0,
              items: []
            }
          });
        });
    }
  }

}
