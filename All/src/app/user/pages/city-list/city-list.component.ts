import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  allCity: any = [];
  totalRec: any;
  recPerPage: number = 100;
  totalPages: any;
  skip: number = 0;
  currentPage: number = 0;
  page: number = 1;
  constructor(private _city: CityService) {
    this._city.getRecord(this.recPerPage, this.skip).subscribe((result) => {
      this.allCity = result;
    });
    this._city.getTotalCity().subscribe((result) => {
      this.totalRec = result.total;
      this.totalPages = Math.ceil(this.totalRec / this.recPerPage);
    });
  }

  paginate(num: any) {
    this.page = num;
    this.currentPage = (num - 1) * this.recPerPage;
    this._city.getRecord(this.recPerPage, num).subscribe((result) => {
      this.allCity = result;
    });
  }
  ngOnInit(): void {}
}
