import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRemoteData()
      .subscribe((data) => {this.contacts = data});
  }

}
