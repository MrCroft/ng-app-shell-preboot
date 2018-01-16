import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUpdateService } from './services/app-update.service';
import { WindowService } from './services/window.service';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AppUpdateService,
    WindowService,
    SnackBarService
  ]
})
export class CoreModule {}
