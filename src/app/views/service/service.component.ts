import { Component } from '@angular/core';
import { ICardList } from 'src/app/models/ICardModel';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  imageSetting = {
    height: 80,
    width: 80
  };

  serviceList: ICardList[] = [
    {
      title: "Design and develop stunning websites",
      text:  "Design and develop visually attractive, user-friendly websites that meet clients' expectations",
      image: "../../../assets/icon/data-science.png"
    },
    {
      title: "User-friendly interfaces, expertly built",
      text:"Create interfaces that are intuitive and easy to use, using expert development skills",
      image: "../../../assets/icon/networking.png"
    },
    {
      title: "Custom website solutions for businesses",
      text:  "Provide customized website solutions tailored to the unique needs of each business",
      image: "../../../assets/icon/data-ai.png"
    },
    {
      title: "Crafting engaging user experiences with code",
      text:  "Develop websites that create engaging user experiences, using expert coding techniques",
      image: "../../../assets/icon/support.png"
    },
    {
      title: "Expert in optimization and performance",
      text:  "Optimize for speed, security, and search engine rankings, using advanced techniques",
      image: "../../../assets/icon/responsive.png"
    },
    {
      title: "Bring your ideas bright to life",
      text:  "Turn clients' website ideas into a reality, using creative and technical expertise",
      image: "../../../assets/icon/vector.png"
    },
    {
      title: "Exceeding website expectations",
      text:  "Go above and beyond to deliver exceptional website design and development services",
      image: "../../../assets/icon/stationery.png"
    },
    {
      title: "Partnering to achieve website goals",
      text:  "Work closely with clients to understand their website goals and help them achieve them",
      image: "../../../assets/icon/problem-solving.png"
    },
    {
      title: "Transforming websites into marketing tools",
      text:  "Develop websites that are effective marketing tools, using best practices and creative techniques",
      image: "../../../assets/icon/blueprint.png"
    },
    {
      title: "Visually striking and functional designs",
      text:  "Design websites that are not only visually appealing but also fully functional and user-friendly",
      image: "../../../assets/icon/styled-components.png"
    }

  ];

}
