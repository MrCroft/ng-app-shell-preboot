import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AppUpdateService } from './core/services/app-update.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('mainMenu') mainMenu: MatSidenav;

  constructor(
    private appUpdate: AppUpdateService,
    private nav: NavigationService
  ) {}

  ngOnInit() {
    this.appUpdate.checkForUpdates();

    this.nav.navigationOccured.subscribe((e) => {
      this.mainMenu.close();
    });
  }
}
