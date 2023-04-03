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
      text:  "Web Development",
      image: "../../../assets/img/suitecrm.png",
      platform: "Website",
      link: "https://suitecrm.com/"
    },
    {
      title: "Gaboras",
      text:"Web Development",
      image: "../../../assets/img/gaboras.jpg",
      platform: "Website",
      link: "https://www.gaboras.com.tr",
    },
    {
      title: "Gaboras Mobile",
      text:  "Mobile App Development",
      image: "../../../assets/img/gaboras-mobile.png",
      platform: "Mobile App",
      link: "https://apps.apple.com/tr/app/gaboras-mobil/id1644123394"
    },
    {
      title: "Alsayyed Design",
      text:  "Web Development",
      image: "../../../assets/img/alsayyeddesign.png",
      platform: "Website",
      link: "https://alsayyeddesign.com/"
    },
    {
      title: "Gameon",
      text:  "Web Development",
      image: "../../../assets/img/games.png",
      platform: "Website",
      link: "https://github.com/yunusyerli1/gameon"
    },
    {
      title: "Beach Resort",
      text:  "Web Development",
      image: "../../../assets/img/beachresort.jpg",
      platform: "Website",
      link: "https://react-kemer-beach-resort.netlify.app/"
    },
    {
      title: "Amazona",
      text:  "Web Development",
      image: "../../../assets/img/shopping.jpg",
      platform: "Website",
      link: "https://github.com/yunusyerli1/shoppingCart"
    }

  ];

}
