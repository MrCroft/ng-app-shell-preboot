import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { environment } from '../../../environments/environment';

import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class NavigationService {
  navigationOccured: Subject<boolean> = new Subject();

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationStart)
    )
      .subscribe((e) => {
        this.navigationOccured.next(true);
      });
  }

}
