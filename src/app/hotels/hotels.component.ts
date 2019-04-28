import { Component, OnInit } from '@angular/core';
import { HotelsService } from './hotels.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  providers: [HotelsService, UserService]
})
export class HotelsComponent implements OnInit {

  constructor(private hotelsService: HotelsService, private userService: UserService) { }

  hotels: any[];
  user: any;

  ngOnInit() {
    this.hotelsService.getHotels().subscribe((data: any[]) => {
      this.hotels = data;
    });

    this.userService.getUser().subscribe(data => {
      this.user = data.user;
    })
  };

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  authenticate($event) {
    $event.preventDefault();
    this.userService.auth();
  }



}
