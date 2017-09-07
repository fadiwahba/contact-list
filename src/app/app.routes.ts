import { ContactListComponent } from "./contact-list/contact-list.component";
import { AboutComponent } from "./about/about.component";
// import { provideRouter } from "@angular/router";

const APP_ROUTES = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const APP_ROUTES_PROVIDER = [
  // provideRouter(APP_ROUTES)
];
