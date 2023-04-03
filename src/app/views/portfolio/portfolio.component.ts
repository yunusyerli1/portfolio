import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projectList: any = [
    {
      title: "SuiteCrm",
      text:  "Mobile App",
      image: "../../../assets/img/suitecrm.png",
      platform: "Website",
      link: "https://suitecrm.com/"
    },
    {
      title: "Gaboras",
      text:"Website",
      image: "../../../assets/img/gaboras.jpg",
      platform: "Website",
      link: "https://www.gaboras.com.tr",
    },
    {
      title: "Gaboras Mobile",
      text:  "Mobile App",
      image: "../../../assets/img/gaboras-mobile.png",
      platform: "Mobile App",
      link: "https://apps.apple.com/tr/app/gaboras-mobil/id1644123394"
    },
    {
      title: "Alsayyed Design",
      text:  "Alsayyed Design Website",
      image: "../../../assets/img/alsayyeddesign.png",
      platform: "Website",
      link: "https://alsayyeddesign.com/"
    },
    {
      title: "Gameon",
      text:  "Gameon Website",
      image: "../../../assets/img/games.png",
      platform: "Website",
      link: "https://github.com/yunusyerli1/gameon"
    },
    {
      title: "Beach Resort",
      text:  "Beach Resort Website",
      image: "../../../assets/img/beachresort.jpg",
      platform: "Website",
      link: "https://github.com/yunusyerli1/beachresort"
    },
    {
      title: "Amazona",
      text:  "Amazona Website",
      image: "../../../assets/img/shopping.jpg",
      platform: "Website",
      link: "https://github.com/yunusyerli1/shoppingCart"
    }

  ];

}
