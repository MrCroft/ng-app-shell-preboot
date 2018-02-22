import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  declarations: [VideosComponent, IndexComponent]
})
export class VideosModule { }
