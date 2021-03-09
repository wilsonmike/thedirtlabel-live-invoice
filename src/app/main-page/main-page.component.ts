import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  getOrders: any = [];
  term = '';
  lineitems: any = [];

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchOrders().subscribe((res) => {
      console.log(res);
    });
    this.getShippedOrders();
    this.getLineItems();
  }

  getShippedOrders = () => {
    this.service.fetchOrders().subscribe((res) => {
      this.getOrders = res;
    });
  }

  getLineItems = () => {
    this.service.fetchLineItems().subscribe((res) => {
      this.lineitems = res;
      console.log(this.lineitems);
    });
  }
}
