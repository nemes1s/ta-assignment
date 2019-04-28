import { Component, OnInit } from "@angular/core";
import { HotelsService } from "../hotels/hotels.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-single-hotel-page",
  templateUrl: "./single-hotel-page.component.html",
  styleUrls: ["./single-hotel-page.component.scss"],
  providers: [HotelsService, UserService]
})
export class SingleHotelPageComponent implements OnInit {
  constructor(
    private hotelsService: HotelsService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  hotel: any = {};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    return this.hotelsService.getHotelById(id).subscribe(data => {
      this.hotel = data;
    });
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  book(id) {
    this.hotelsService.bookHotel(id).subscribe(data => {
      alert("Hotel booked!");
    });
  }
}
