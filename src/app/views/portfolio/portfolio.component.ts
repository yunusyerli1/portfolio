import { Component } from '@angular/core';
import { ICardList } from 'src/app/models/ICardModel';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  imageSetting = {
    height: 190,
    width: 286
  };

  projectList: ICardList[] = [
    {
      title: "SuiteCrm",
      text:  "Web Development",
      image: "../../../assets/img/suitecrm.png",
      link: "https://suitecrm.com/"
    },
    {
      title: "Gaboras",
      text:"Web Development",
      image: "../../../assets/img/gaboras.jpg",
      link: "https://www.gaboras.com.tr",
    },
    {
      title: "Gaboras Mobile",
      text:  "Mobile App Development",
      image: "../../../assets/img/gaboras-mobile.png",
      link: "https://apps.apple.com/tr/app/gaboras-mobil/id1644123394"
    },
    {
      title: "Alsayyed Design",
      text:  "Web Development",
      image: "../../../assets/img/alsayyeddesign.png",
      link: "https://alsayyeddesign.com/"
    },
    {
      title: "Gameon",
      text:  "Web Development",
      image: "../../../assets/img/games.png",
      link: "https://github.com/yunusyerli1/gameon"
    },
    {
      title: "Beach Resort",
      text:  "Web Development",
      image: "../../../assets/img/beachresort.jpg",
      link: "https://react-kemer-beach-resort.netlify.app/"
    },
    {
      title: "Amazona",
      text:  "Web Development",
      image: "../../../assets/img/shopping.jpg",
      link: "https://github.com/yunusyerli1/shoppingCart"
    }

  ];

}
