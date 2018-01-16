import { Component, OnInit } from '@angular/core';

import { AppUpdateService } from './core/services/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private appUpdate: AppUpdateService
  ) {}

  ngOnInit() {
    this.appUpdate.checkForUpdates();
  }
}
