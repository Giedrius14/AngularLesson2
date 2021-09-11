import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  handleClick() {
    this.dataService.logger();
  }
}
