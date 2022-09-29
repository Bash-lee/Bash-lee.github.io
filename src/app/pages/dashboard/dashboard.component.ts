import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ADMIN = false;
  user:any
  constructor(private storage:StorageService) { }

  ngOnInit(): void {
    this.user = this.storage.getUser();
    const role = this.storage.getUser().role;
    this.ADMIN = role.includes("ADMIN")
  }

}
