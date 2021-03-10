import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.css']
})
export class FebruaryComponent implements OnInit {
  getOrders: any = [];
  term = '';
  searchline = '';
  lineitems: any = [];

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchFebOrders().subscribe((res) => {
      // console.log(res);
    });
    this.getShippedOrders();
  }

  getShippedOrders = () => {
    this.service.fetchFebOrders().subscribe((res) => {
      this.getOrders = res;
      this.getOrders.splice(0, 1);
    });
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
