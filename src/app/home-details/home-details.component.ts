import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Home } from '../mocks/home';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  home:Home;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.homeService.getHome(+params.get('id')))
      .subscribe(home => this.home = home);
  }

  goBack(): void {
    this.location.back();
  }
}
