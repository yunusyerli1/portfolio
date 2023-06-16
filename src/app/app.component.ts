import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  sideMenu = [
    {
      id: 1,
      title: "Home",
      icon: "home",
      link: "home",
      status: true
    },
    {
      id: 2,
      title: "Portfolio",
      icon: "bag",
      link: "portfolio",
      status: true
    },
    {
      id: 3,
      title: "Service",
      icon: "wrench",
      link: "service",
      status: true
    },
    {
      id: 4,
      title: "Skills",
      icon: "database",
      link: "skills",
      status: true
    },
    {
      id: 5,
      title: "Contact",
      icon: "postcard",
      link: "contact",
      status: true
    }
  ]
}
