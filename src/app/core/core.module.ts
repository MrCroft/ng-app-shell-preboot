import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppUpdateService } from './services/app-update.service';
import { NavigationService } from './services/navigation.service';
import { WindowService } from './services/window.service';
import { SnackBarService } from './services/snack-bar.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AppUpdateService,
    NavigationService,
    WindowService,
    SnackBarService,
    ApiService
  ]
})
export class CoreModule {}
