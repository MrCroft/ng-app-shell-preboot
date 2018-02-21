import { Component, OnInit } from '@angular/core';

import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos = this.api.getVideos();

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {}

}
