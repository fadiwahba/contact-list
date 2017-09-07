import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Contact } from "../../interfaces/contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = []
  selectedContact: Contact;

  constructor(private dataService: DataService) {
    console.log('ContactListComponent constructor');
  }

  ngOnInit() {
    console.log('ContactListComponent ngOnInit');
    this.dataService.getRemoteData()
      .subscribe((data) => {this.contacts = data});
    // initialize a default contact card
    console.log(this.contacts[0]);
    this.selectedContact = this.contacts[0];
  }

  onSelect(event, contact: Contact): void {
    event.preventDefault();
    this.selectedContact = contact;
  }

}
