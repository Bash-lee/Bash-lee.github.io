import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 user:any
  constructor(private storage:StorageService) {

   }

  ngOnInit(): void {
    const user = this.storage.getUser().role
    this.user = user
  }

}
