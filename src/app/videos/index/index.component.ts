import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  videos = this.api.getVideos();

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {}

}
