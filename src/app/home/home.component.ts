import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Home } from '../mocks/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular 4 Home';
  homes:Home[];

  constructor(
    private router:Router, 
    private homeService:HomeService
  ) {}

  getHomes(): void {
    this.homeService.getHomes()
    .then(homes => this.homes = homes);
  }

  homeDetails(home:Home): void {
    if(home) {
      this.router.navigate(['/details', home.id]);
    }
  }

  ngOnInit(): void {
    this.getHomes();
  }
}
