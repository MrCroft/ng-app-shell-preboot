import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowService } from './services/window.service';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WindowService,
    SnackBarService
  ]
})
export class CoreModule {}
