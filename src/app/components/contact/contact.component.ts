import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "../../interfaces/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  // contact: Contact;
  // contact: Contact = {
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "Bret",
  //   email: "Sincere@april.biz",
  //   address: {
  //     street: "Kulas Light",
  //     suite: "Apt. 556",
  //     city: "Gwenborough",
  //     zipcode: "92998-3874",
  //     geo: {
  //       lat: "-37.3159",
  //       lng: "81.1496"
  //     }
  //   },
  //   phone: "1-770-736-8031 x56442",
  //   website: "hildegard.org",
  //   company: {
  //     name: "Romaguera-Crona",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     bs: "harness real-time e-markets"
  //   }
  // };

  constructor() { }

  ngOnInit() {
  }

}
