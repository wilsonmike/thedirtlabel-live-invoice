import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-maytodate',
  templateUrl: './maytodate.component.html',
  styleUrls: ['./maytodate.component.css']
})
export class MaytodateComponent implements OnInit {
  may: any = [];
  mayline: any = [];
  term = '';
  searchline = '';

  constructor(private service: DatafetchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEdit(): any{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
