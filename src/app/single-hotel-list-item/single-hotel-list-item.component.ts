import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { HotelsService } from '../hotels/hotels.service';

@Component({
  selector: 'app-single-hotel-list-item',
  templateUrl: './single-hotel-list-item.component.html',
  styleUrls: ['./single-hotel-list-item.component.scss']
})
export class SingleHotelListItemComponent implements OnInit {

  constructor(private userService: UserService, private hotelsService: HotelsService) { }
  @Input() hotel: any;

  ngOnInit() {
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  book(id) {
    this.hotelsService.bookHotel(id).subscribe(data => {
      alert('Hotel booked!');
    });
  }
}
