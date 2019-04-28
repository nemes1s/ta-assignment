import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { reduce } from "rxjs/operators";
@Injectable()
export class HotelsService {
  config = {
    hotelsUrl: "http://5c505db9ee97f600140480dd.mockapi.io/hotels",
    bookUrl: "http://5c505db9ee97f600140480dd.mockapi.io/booking"
  };

  constructor(private http: HttpClient) {}
  getHotels() {
    return this.http.get(this.config.hotelsUrl);
  }

  getHotelById(id) {
    return this.http
      .get(this.config.hotelsUrl)
      .pipe(
        reduce((acc: any, i: any[]) => {
          acc = i.find(f => id == f.id)
          if(acc) {
            return acc;
          }
        }, {})
      );
  }

  bookHotel(id) {
    return this.http.post(this.config.bookUrl, {
      id: id
    });
  }
}
