import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {
  april: any = [];
  aprilline: any = [];
  term = '';
  searchline = '';

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getApril();
    this.getAprilLine();
  }

  getApril = () => {
    this.service.fetchAprilShip().subscribe((res) => {
      this.april = res;
      this.april.splice(0, 1);
      this.april.sort((a, b) => (b.ordernumber > a.ordernumber) ? 1 : ((a.ordernumber > b.ordernumber) ? -1 : 0));
      console.log(this.april);
    });
  }
  getAprilLine = () => {
    this.service.fetchAprilLine().subscribe((res) => {
      this.aprilline = res;
      this.aprilline.splice(0, 1);
      this.aprilline.sort((a, b) => (b.ordernumber > a.ordernumber) ? 1 : ((a.ordernumber > b.ordernumber) ? -1 : 0));
      console.log(this.aprilline);
    });
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
